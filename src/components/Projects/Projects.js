import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import course from "../../Assets/Projects/course.png";
import event from "../../Assets/Projects/event.png";
import weather from "../../Assets/Projects/weather-app.png";
import imagify from "../../Assets/Projects/imagefy.png";
import language from "../../Assets/Projects/language-translator.png";
import portfolio from "../../Assets/Projects/portfolio.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Evently "
              description="Evently is a comprehensive event management application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application enables users to create, list, and book events seamlessly.
              Users can create events by providing necessary details such as title, description, date, time, and location."
              ghLink="https://github.com/sahil078/EpicEvaa-The-Event-management-platform"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Developed a personal portfolio website using React to showcase my skills, projects, and professional background. The website serves as an online resume and portfolio, providing potential employers and collaborators with a comprehensive overview of my abilities and accomplishments."
              ghLink="https://github.com/sahil078/MyPortfolio"
              demoLink="https://sahil078.github.io/MyPortfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecast"
              description=" weather forecast application built using HTML , CSS and JavaScript designed to provide users with accurate and up-to-date weather information. The app features real-time weather data, forecasts, and user-friendly interfaces to enhance the overall user experience."
              ghLink="https://github.com/sahil078/Weather-App"
              demoLink="https://sahil078.github.io/Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagify}
              isBlog={false}
              title="ImageEnhance"
              description="ImageEnhance is a sophisticated SaaS (Software as a Service) application designed to provide users with advanced image editing capabilities. The platform allows users to edit images, restore image quality, and remove unwanted objects from the background. Additionally, it features an intelligent search function that displays specific posts based on user queries."
              ghLink="https://github.com/sahil078"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={language}
              isBlog={false}
              title="Language Translator"
              description="language translator application built using React, designed to provide users with quick and accurate translations between multiple languages. The app leverages advanced language translation APIs to deliver precise translations and offers a user-friendly interface to enhance the overall user experience."
              ghLink="https://github.com/sahil078/language-translator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={course}
              isBlog={false}
              title="Course-App"
              description="online course platform developed using React, designed to provide users with access to a wide range of educational content. The application allows users to browse, enroll in, and complete courses across various subjects."
              ghLink="https://github.com/sahil078/react-course-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
