import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Card, Container, Row, Alert } from "react-bootstrap";
import { keys } from "regenerator-runtime";
import NFT1 from "../assets/NFT1-100.jpg";
import NFT2 from "../assets/NFT2-100.jpg"
import NFT3 from "../assets/NFT3-100.jpg";
import NFT4 from "../assets/NF4-100.jpg";
import NFT5 from "../assets/NFT5-100.jpg";


const BN = require("bn.js");
const MintingTool = (props) => {
  const mintNFT = async () => {
    await window.contract.nft_mint(
      {
        token_id: `${window.accountId}-go-team-token`,
        metadata: {
          title: "My Non Fungible Team Token",
          description: "The Team Most Certainly Goes :)",
          media:
            "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif",
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN("1000000000000000000000000")
    );
  };

  return (
    <Card style={{ padding: "2vh" }}>
      <Container>
        <Row style={{ marginBottom: "2vh" }}>
          <p>
          <h2> Find Your Web3 Mentor - Explore NFT Profiles! ✨</h2>
          </p>
        </Row>
        <Row className='d-flex justify-content-center'>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Alert variant='danger' style={{ marginTop: "2vh" }}>
          <h2> Lena </h2>
          <img src={NFT1} height={200} width={200} />
          <a href="https://demo.storj-ipfs.com/ipfs/QmXmYwpDNmfzN1sk7VY4XCWuNdmmXTZzgX4ba9i38wtk6z">media</a>
          <p>
            Skills:
            <ul>
              <li><b>Developer</b>: Expert</li>
              <li><b>Hacker</b>: Advanced</li>
              <li><b>Hackathons</b>: Expert</li>
              <li><b>Mentor_level</b>: Silver</li>
              <li><b>Mentoring</b>: Silver</li>
              <li><b>Founder</b>: Expert</li>
              <li><b>Conference</b>: Activate_Miami_2022</li>
            </ul>
          </p>
          </Alert>
          <Alert variant='primary' style={{ marginTop: "2vh" }}>
          <h2> Yip </h2>
          <img src={NFT2} height={200} width={200} />
          <p>
            Skills:
            <ul>
              <li><b>Developer</b>: Medium</li>
              <li><b>Hacker</b>: Medium</li>
              <li><b>Hackathons</b>: Expert</li>
              <li><b>Mentor_level</b>: Gold</li>
              <li><b>Mentoring</b>: Expert</li>
              <li><b>Founder</b>: Beginner</li>
              <li><b>Conference</b>: Activate_Miami_2022</li>
            </ul>
          </p>
          </Alert>
          <Alert variant='secondary' style={{ marginTop: "2vh" }}>
          <h2> Laura </h2>
          <img src={NFT3} height={200} width={200} />
          <p>
            Skills:
            <ul>
              <li><b>Developer</b>: Medium</li>
              <li><b>Hacker</b>: Beginner</li>
              <li><b>Hackathons</b>: Medium</li>
              <li><b>Mentor_level</b>: Gold</li>
              <li><b>Mentoring</b>: Expert</li>
              <li><b>Founder</b>: Beginner</li>
              <li><b>Conference</b>: Activate_Miami_2022</li>
            </ul>
          </p>
          </Alert>
          <Alert variant='warning' style={{ marginTop: "2vh" }}>
          <h2> Diana </h2>
          <img src={NFT4} height={200} width={200} />
          <p>
            Skills:
            <ul>
              <li><b>Developer</b>: Medium</li>
              <li><b>Hacker</b>: Beginner</li>
              <li><b>Hackathons</b>: Medium</li>
              <li><b>Mentor_level</b>: Silver</li>
              <li><b>Mentoring</b>: Expert</li>
              <li><b>Founder</b>: Beginner</li>
              <li><b>Conference</b>: Activate_Miami_2022</li>
            </ul>
          </p>
          </Alert>
          <Alert variant='secondary' style={{ marginTop: "2vh" }}>
          <h2> Shan </h2>
          <img src={NFT5} height={200} width={200} />
          <p>
            Skills:
            <ul>
              <li><b>Developer</b>: Medium</li>
              <li><b>Hacker</b>: Expert</li>
              <li><b>Hackathons</b>: Medium</li>
              <li><b>Mentor_level</b>: Gold</li>
              <li><b>Mentoring</b>: Expert</li>
              <li><b>Founder</b>: Beginner</li>
              <li><b>Conference</b>: Activate_Miami_2022</li>
            </ul>
          </p>
          </Alert>
        </Row>
      </Container>
    </Card>
  );
};

MintingTool.propTypes = {};

export default MintingTool;
