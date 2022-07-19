import React from 'react'
import image from "../Hero/gym-image/channel-removebg-preview.png";
import "./footer.css";
function Footer() {
  return (
    <>
     <div className="footer">
        <div className="icons">
       <a  rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/md-shoyeb-49645020a/"> <i class="uil uil-linkedin"></i></a>
      <a rel='noreferrer' target="_blank" href="https://www.github.com/shoyebmd424">  <i class="uil uil-github"></i></a>
       <a rel=" noreferrer"target="_blank" href="https://www.instagram.com/msa_424/"> <i class="uil uil-instagram-alt"></i> </a>
        </div>
        <div className="log">
            <img src={image} alt="" />
        </div>
        <span>copyright reserved Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, necessitatibus.</span>
        <div className="blur f-blur-1"></div>
        <div className="blur f-blur-2"></div>
     </div>
    </>
  )
}

export default Footer;
