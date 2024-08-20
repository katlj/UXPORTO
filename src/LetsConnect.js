
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import Email from "./Images/Email.png";
import LinkedinIcon from "./Images/LinkedinIcon.png";
import GithubLogo from "./Images/GithubLogo.png";
import "./LetsConnect.css";
export default function LetsConnect(){
    return(
         <div className="scbuttons">
        
        <Container>
        <Row>
      <Col  id="Linkedin" >< Button variant="outline-*">< img src={LinkedinIcon} alt="linkedin icon" /></Button></Col>
        <Col id="github"><Button variant = "outline-*"><img src={GithubLogo} alt="github icon"/></Button></Col>
        <Col id="mail"><Button variant="outline-*"><img src={Email} alt="mail icon"></img></Button></Col>
        </Row>
        </Container>
    
         </div>
    );
}
