import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
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
          
       <Col id="Linkedin">< Button variant="outline-*" ><  img src={LinkedinIcon}/></Button></Col>
        <Col id="github"><Button variant = "outline-*"><img src={GithubLogo}/></Button></Col>
        <Col id="mail"><Button variant="outline-*"><img src={Email}></img></Button></Col>
        </Row>
        </Container>
    
        </div>
    );
}
