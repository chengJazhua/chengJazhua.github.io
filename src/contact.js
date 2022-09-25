import React from 'react';
import { BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md'
  

const Contact = () => {
  return (
  

      
    <div
     

      
    >
      <ul>
      
      <ul className="nav-links">
      <a href = "http://www.linkedin.com/in/ja-zhua-cheng/" > <li><BsLinkedin size = "50" color = "#874BF7"/></li> </a>
      <a href = "https://github.com/chengJazhua" > <li><BsGithub size = "50" color = "#874BF7"/></li> </a>
      <a href = "https://www.instagram.com/chengjazhua/" > <li><BsInstagram size = "50" color = "#874BF7"/></li> </a>
      <a href = "mailto:chengjazhua@gmail.com?subject = Feedback&body = Message"> <li><MdEmail size = "50" color = "#874BF7"/></li> </a>
      </ul>


    </ul>
    </div>

    
  );
};
  
export default Contact;