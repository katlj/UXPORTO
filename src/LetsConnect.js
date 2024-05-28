import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import LinkedinIcon from "./Images/Linkedin.png";
export default function LetsConnect(){
    return(
        <>
        <Container>
        <Row>
       <Image>{LinkedinIcon}</Image>
        <Col><Button> Email</Button></Col>
        <Col><Button>Github</Button></Col>
        </Row>
        </Container>
        
        </>
    );
}
