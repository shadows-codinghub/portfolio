import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import animath from "../../Assets/Projects/animath.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animath}
              isBlog={false}
              title="visualizing maths through animation"
              description="Animath is a modern, visually engaging math project that brings abstract mathematical concepts to life using animations, interactivity, and clean design. Built with web technologies, it aims to make learning math more intuitive, fun, and accessible — especially for visual learners."
              ghLink="https://github.com/jithurx/AniMath"
              
            />
          </Col>
        </Row>
      </Container>
  );
}

export default Projects;
