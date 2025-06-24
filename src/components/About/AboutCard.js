import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> adharsh k </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
             I am a B. Tech student studying under <span className="purple">APJ Abdul Kalam Technological University</span>.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Curious enough to ask, bold enough to try, relentless enough to fix"{" "}
          </p>
          <footer className="blockquote-footer">adharsh k</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
