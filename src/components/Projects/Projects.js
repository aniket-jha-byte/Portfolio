import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movietmdb from "../../Assets/Projects/movietmdb.png";
import lottery from "../../Assets/Projects/lotterydapp.png";
import cryptoverse from "../../Assets/Projects/cryptoverse.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lottery}
              isBlog={false}
              title="Lottery Dapp"
              description="Created a Lottery Dapp using Solidity, Truffle, JavaScript and NextJs framework. Smart contract deployed on polygon mumbai testnet • Multiple User can enter in a lottery and the owner can pick a winner randomly."
              ghLink="https://github.com/aniket-jha-byte/lottery-dapp"
              demoLink="https://lottery-dapp99.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movietmdb}
              isBlog={false}
              title="Movie Website"
              description="In this website user select their favourite movie which goes and store in their favorurites accoring to movie genre I have added sorting feature on based of rating and popularity and pagination User can search movie and can delete movie from their favourties"
              ghLink="https://github.com/aniket-jha-byte/Movie-website"
              demoLink="https://tmdb99.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoverse}
              isBlog={false}
              title="CryptoVerse"
              description="Created a crypto website using JavaScript, React at Frontend, Firebase and using Coingecko Api. Features added like pagination, Login, SignUp and Searching"
              ghLink="https://github.com/aniket-jha-byte/crypto-verse"
              demoLink="https://cryptoverse99.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;