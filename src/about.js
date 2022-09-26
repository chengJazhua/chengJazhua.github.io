import React from "react";
import styled from "styled-components";
import pic from "./pic.jpg"
  
const About = () => {
  return (
    <div>
    <div style = {{
        width: "60vw"
      }}>
      <div className = "text" style = {{fontSize: 20}}>
        Welcome to my website! My name is Ja-Zhua Cheng, a freshman currently studying Computer Science at University of Virginia. 
        I am an aspiring software engineer, but am very open to exploring other related fields. I not only love to code, but also enjoy 
        playing the piano and weightlifting. I have CS experience from an internship at Leidos, personal projects, and many classes.
        
      </div>
      
    </div>
    <div className = "buttonSpace">
      <img src={pic} className="selfie" />
      <a href="https://docs.google.com/document/d/1rHz_7m1T2YJT8qIr2reuPgV3pUOo2I8dNI6pBRvy3sc/edit?usp=sharing" target="_blank">
          <Button className = "button" style = {{fontStyle: 'italic', fontWeight: 'bold'}}>RESUME</Button>
          </a>
      </div>
      <div className = "skills" style = {{fontSize: 15, fontStyle: 'italic'}}>
          
          Experience in:&emsp; Java&emsp; •&emsp; C++&emsp; •&emsp; Python&emsp; •&emsp; Javascript&emsp; •&emsp; HTML &emsp; •&emsp; 
          CSS&emsp; •&emsp; React&emsp; •&emsp; Docker&emsp; •&emsp; CAD&emsp; •&emsp; Unity&emsp; •&emsp; Git&emsp; •&emsp; MatLab
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