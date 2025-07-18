import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arunkavi </span>
            from <span className="purple"> Coimbatore, India.</span>
            <br />
            I Find programming by Accident, it turns out my full time  obession .
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech Videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arunkavi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
