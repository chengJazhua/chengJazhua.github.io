import React from "react";
import styled from "styled-components";

  
const About = () => {
  return (
    <div>
    <div style = {{
        width: "60vw"
      }}>
      <h1 className = "text">
        Welcome to my website! My name is Ja-Zhua Cheng, a freshman currently studying Computer Science at University of Virginia. 
        I am an aspiring software engineer, but am exploring many other fields. I not only love to code, but also enjoy 
        playing the piano and weightlifting. I have CS experience from an internship at Leidos, personal projects, and many classes.
      </h1>
    </div>
    <div className = "buttonSpace">
      <a href="https://docs.google.com/document/d/1rHz_7m1T2YJT8qIr2reuPgV3pUOo2I8dNI6pBRvy3sc/edit?usp=sharing" target="_blank">
          <Button className = "button" style = {{fontStyle: 'italic', fontWeight: 'bold'}}>RESUME</Button>
          </a>
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