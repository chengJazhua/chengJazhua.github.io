import { light } from "@material-ui/core/styles/createPalette";
import React from "react";
import styled from "styled-components";
import pic from "./pic.jpg"
import ScrollTop from './ScrollTop';

  
const About = () => {
  return (
    <div>
      <ScrollTop/>
      <div className = "buttonSpace">
      <img src={pic} className="selfie" />
      <a href="https://docs.google.com/document/d/1rHz_7m1T2YJT8qIr2reuPgV3pUOo2I8dNI6pBRvy3sc/edit?usp=sharing" target="_blank">
          <Button className = "button" style = {{fontStyle: 'italic', fontWeight: 'bold'}}>RESUME</Button>
          </a>
      </div>
    <div style = {{
        width: "75vw"
      }}>
      <div className = "text2" style = {{fontSize: '1.68vw'}}>
        Welcome to my website! My name is Ja-Zhua Cheng, a sophomore currently studying Computer Science at University of Virginia. 
        I am an aspiring software engineer, but am very open to exploring other related fields. I not only love to code, but also enjoy 
        playing the piano and weightlifting. I have CS experience from an internship at Johns Hopkins Applied Physics Laboratory and Leidos, personal projects, and many classes.
        In addition, I am a member in the Solar Car Team, Computer and Network Security Club, Wushu Club, and Student Game Developers Club.
        Feel free to reach out to me at chengjazhua@gmail.com or my socials at the bottom of the page!
        
      </div>
      
    </div>
    
      <div className = "skills" style = {{fontSize: '1.27vw', fontStyle: 'italic', height: "30vh"}}>
          
          Experience in:&emsp; Java&emsp; •&emsp; C++&emsp; •&emsp; Python&emsp; •&emsp; Javascript&emsp; •&emsp; HTML &emsp; •&emsp; 
          CSS&emsp; •&emsp; React&emsp; •&emsp; Docker&emsp; •&emsp; CAD&emsp; •&emsp; Unity&emsp; •&emsp; Git&emsp; •&emsp; MatLab &emsp; •&emsp; 
          Powershell &emsp; •&emsp; Batch &emsp; •&emsp; Node.js &emsp; •&emsp; C &emsp; •&emsp; C# &emsp; •&emsp; Assembly x86-64 &emsp; •&emsp; LaTeX 
          &emsp; •&emsp; Bash &emsp; •&emsp; Vim &emsp; •&emsp; Agile &emsp; •&emsp; Linux

        </div>
    </div>
    
  );
};
  
const Button = styled.button`
  background-color: #0f0f21;
  color: white;
  
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
export default About;