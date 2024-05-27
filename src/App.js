import Typewriter from "typewriter-effect";
import React from "react";
import Headshot from "./Images/Headshot.jpeg";
import DownArrow from "./Images/DownArrow.png";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Project from "./Project.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {
  // Add this in your component file
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);
  return (
    <>
  
    <div className="Main ">
      kathurnasworks
     <h1>Hi, Im Kathurna!</h1>
      <h3 id="phonetically"><Typewriter onInit={(typewriter)=> {typewriter.typeString("(kuh-thur")
      .pauseFor(1000).typeString("-nuh)").start()}}/></h3>
      <h2 id="subheader">I thrive at the intersection of engineering and design.</h2> 
  
     
       <Container>
        <Row> 
        <div className="Bio">
      <img src={Headshot} alt="Heashot"></img>
      <p id="minibio"> With my user-centered mindset, I strive to create innovative,
       creative, and game changing solutions that bring about tangible change.</p>
     </div></Row>
     </Container>
     
    <div className="Move">
     
     <img src={DownArrow} alt="Move down"></img>
     </div>
    <div className="Projects">My Projects</div>
    <Project/>
    <div className="Socials">Let's Connect!</div>
    
    </div>
    </>
  );
}
