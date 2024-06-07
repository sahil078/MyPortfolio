import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Md Sahil </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I am currently working on myself to inprove my coding and problem solving skills.
            <br />
            I have completed my BCA from Jamia Hamdard University , New Delhi
            <br />
            <br />
            Apart from coding, These are some other activities that i love to do in my free times like .......
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Web-Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "yellow" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SAHIL</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
