import React from 'react';
import { BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs';
  

const Contact = () => {
  return (
  

      
    <div
      style={{
        // backgroundImage
        backgroundPosition: "center",
        backgroundSize: "cover",

        height: "88vh",
      }}

      
    >
      <ul>
      <h1> Contact me at chengjazhua@gmail.com and check out my socials below</h1>
      <ul className="nav-links">
      <a href = "http://www.linkedin.com/in/ja-zhua-cheng/" > <li><BsLinkedin/></li> </a>
      <a href = "https://github.com/chengJazhua" > <li><BsGithub/></li> </a>
      <a href = "https://www.instagram.com/chengjazhua/" > <li><BsInstagram/></li> </a>
      
      </ul>


    </ul>
    </div>

    
  );
};
  
export default Contact;