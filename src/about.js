import { light } from "@material-ui/core/styles/createPalette";
import React from "react";
import styled from "styled-components";
import pic from "./pic.jpg"
  
const About = () => {
  return (
    <div>
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
        Welcome to my website! My name is Ja-Zhua Cheng, a rising senior currently studying Computer Science at University of Virginia graduating May 2025. 
        I am an aspiring software engineer, with a particular interest in AI and ML. I not only love to code, but also enjoy 
        playing the piano, weightlifting, golf, and other sports. I have CS experience from internships at Capital One, Johns Hopkins Applied Physics Laboratory, and Leidos in addition to my own 
        personal projects.
        In addition, I am a member in the theCourseForum, Business and AI Club, and Wushu Club. I am currently looking for full time roles after graduation!
        Feel free to reach out to me at chengjazhua@gmail.com or my socials at the bottom of the page!
        
      </div>
      
    </div>
    
      <div className = "skills" style = {{fontSize: '1.27vw', fontStyle: 'italic', height: "30vh"}}>
          
          Experience in:&emsp; Java&emsp; •&emsp; C++&emsp; •&emsp; Python&emsp; •&emsp; Javascript&emsp; •&emsp; HTML &emsp; •&emsp; 
          CSS&emsp; •&emsp; React&emsp; •&emsp; Go&emsp; •&emsp; AWS&emsp; •&emsp; Docker&emsp; •&emsp; Git&emsp; •&emsp; MatLab &emsp; •&emsp; 
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