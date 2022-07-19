import React, { useRef } from "react";
import "./textimonial.css";
import m1 from "../Hero/gym-image/gym1.jpg";
import emailjs from '@emailjs/browser';
function Testimonial() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_epe997h', 'template_atxwwcg', form.current, 'WvDZ4qFBR6DGGOMNt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
      <div id="testimonials" className="testimonial">
        <div className="test-conatent">
          <div className="test-title">
            {" "}
            <span>Testimonial</span>
          </div>
          <div>
            <span className="strike-text">What They</span> <br />
            <span>Say About Us</span>
          </div>
          <div className="test-details">
            <p>
              i made the right choice by choosing the fitclub and by choosing
              the right plan and program i already achieved my ideal body!
            </p>
          </div>
          <div className="auther">
            <span className="auther-name">methew handrickson</span>
            <span>-Enterpreneur</span>
          </div>
        </div>

        <div className="test-right">
          <div></div>
          <img src={m1} style={{ width: "15rem", height: "15rem" }} alt="" />
         
        </div>
      </div>

      <div className="level">
        <div className="level-title">
          <div></div>
          <div>
            <span className="strike-text">ready to </span>
            <span>level up your body</span>
            <span className="strike-text"> with us</span>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="form">
            <input name="user_email" placeholder="Enter your Email" type="text" />
          <button className="test-btn"> Join Now</button>
        </form>
      </div>
      <hr />
      
    </>
  );
}

export default Testimonial;
