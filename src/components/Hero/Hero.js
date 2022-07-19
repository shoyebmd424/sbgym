import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import hero_image from "./gym-image/alexander-redl-d3bYmnZ0ank-unsplash-removebg-preview.png";
import { motion } from "framer-motion"
import bg from "./gym-image/bg-image-removebg-preview.png";
import { NavLink } from "react-router-dom";
function Hero() {
  const transition={type:'spring',duratin:1}
  return (
    <>
    <div className="blur hero-blur"></div>
      <div className="hero">
        <div className="left-h">
          <Header />
          <div id="hero" className="best-ad">
            <motion.div initial={{left:'238px'}}
            whileInView={{left:'8px'}}
            transition={{...transition,type:'tween'}}></motion.div>
            <span>the best fitness club in the town</span>
          </div>

          <div className="hero-text">
            <div>
              <span className="strike-text">Shape</span>
              <span> Your</span>
            </div>
            <div>
              <span>ideal body </span>
            </div>
          </div>
          <div className="hero-desc">
            <span>
              {" "}
              in here we will help you shape and build your ideal body and live
              up your life to fullest
            </span>
          </div>
          <div className="figures">
            <div>
              <span>+140</span>
              <span>Expert coaches</span>
            </div>
            <div>
              <span>+978</span>
              <span> Members joined</span>
            </div>
            <div>
              <span>+600+</span>
              <span>fitness program</span>
            </div>
          </div>
          <div className="hero-buttons">
            <NavLink to="/join"  className="btn">Get Started</NavLink >
            <button className="btn"><NavLink to="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389" style={{fontSize:'1rem'}}> Learn more </NavLink></button>
          </div>
        </div>
        <div className="right-h">
          <NavLink to='/join' className="btn">Join Now</NavLink>

          <div className="heart-rate">
            <span>
              <i className="uil uil-heart"></i>
            </span>
            <span>Heart Rate</span>
            <span>123 bpm</span>
          </div>
          <img src={hero_image} alt="" className="hero-image" />
          <img src={bg} className="hero-image-bg" alt="" />

          <div className="calaries">
            <i className="uil uil-analytics"></i>
            <div>
            
              <span>calories Burned</span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
