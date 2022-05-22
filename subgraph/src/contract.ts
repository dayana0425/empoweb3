import { near, JSONValue, json, ipfs, log } from "@graphprotocol/graph-ts"
import { Token, User } from "../generated/schema"

export function handleReceipt(
  receipt: near.ReceiptWithOutcome
): void {
  const actions = receipt.receipt.actions;
  for (let i = 0; i < actions.length; i++) {
    handleAction(actions[i], receipt, receipt.outcome)
  }
}

function handleAction(
  action: near.ActionValue,
  receiptWithOutcome: near.ReceiptWithOutcome,
  test: near.ExecutionOutcome
): void {
  log.info("length: {}", [test.logs.length.toString()])
  if (action.kind != near.ActionKind.FUNCTION_CALL) {
    log.info("Early return: {}", ["Not a function call"]);
    return; 
  }

  log.info("Didn't return: {}", ["It is a function call"]);

  const outcome = receiptWithOutcome.outcome;
  const functionCall = action.toFunctionCall();
  const ipfsHash = 'bafybeiew2l6admor2lx6vnfdaevuuenzgeyrpfle56yrgse4u6nnkwrfeu'
  const methodName = functionCall.methodName

  log.info("methodName: {}", ["Made it: " + methodName]);

  if (methodName == 'nft_mint') {
    let val = methodName == 'nft_mint'
    let str_val = val.toString()
    log.info("Made it? methodName == 'nft_mint' {}", ["Made it: " + str_val]);
    if(outcome.logs[0]){
      log.info("LENGTH", [outcome.logs.length.toString()])
    }

    for (let logIndex = 0; logIndex < outcome.logs.length; logIndex++) {
      let outcomeLog = outcome.logs[logIndex].toString();
      log.info("outcome: {}", [outcomeLog])

      let parsed = outcomeLog.replace('EVENT_JSON:', '')

      let jsonData = json.try_fromString(parsed)
      const jsonObject = jsonData.value.toObject()

      let eventData = jsonObject.get('data')
      if (eventData) {
        let eventArray:JSONValue[] = eventData.toArray()

        let data = eventArray[0].toObject()
        const tokenIds = data.get('token_ids')
        const owner_id = data.get('owner_id')
        if (!tokenIds || !owner_id) return

        let ids:JSONValue[] = tokenIds.toArray()
        const tokenId = ids[0].toString()

        let token = Token.load(tokenId)

        if (!token) {
          token = new Token(tokenId)
          token.tokenId = tokenId
          
          token.image = ipfsHash + '/' + tokenId + '.png'
          let metadata = ipfsHash + '/' + tokenId + '.json'
          token.metadata = metadata
  
          let metadataResult = ipfs.cat(metadata)
          if (metadataResult) {
            let value = json.fromBytes(metadataResult).toObject()
            if (value) {
              const kind = value.get('kind')
              if (kind) {
                token.kind = kind.toString()
              }
              const seed = value.get('seed')
              if (seed) {
                token.seed = seed.toI64() as i32
              }
            }
          }
        }

        token.ownerId = owner_id.toString()
        token.owner = owner_id.toString()

        let user = User.load(owner_id.toString())
        if (!user) {
          user = new User(owner_id.toString())
        }

        token.save()
        user.save()
      }
    }
  }
}