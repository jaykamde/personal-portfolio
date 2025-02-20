import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <h1>
            <span style={{ color: "white" }}>Aniket </span>
            <span style={{ color: "purple" }}>Kamde</span>
          </h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           <div className="social-icon">
                         <a href="https://github.com/jaykamde" target="_blank" rel="noopener noreferrer">
                           <FaGithub size={28} color="white" />
                         </a>
                         <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                           <FaLinkedin size={28} color="white" />
                         </a>
                         <a href="https://www.instagram.com/offixe.jaiii" target="_blank" rel="noopener noreferrer">
                           <FaInstagram size={28} color="white" />
                         </a>
                       </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
