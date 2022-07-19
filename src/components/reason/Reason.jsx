import React from "react";
import m1 from "../Hero/gym-image/gym1.jpg";
import m2 from "../Hero/gym-image/gym2.jpg";
import m3 from "../Hero/gym-image/gym3.jpg";
import m4 from "../Hero/gym-image/gym4.jpg";
import "./Reason.css";
function Reason() {
  return (
    <>
      <div id="why" className="reason">
        <div className="right-images">
          <img src={m3} style={{ width: "15vw" }} alt="" />
          <div>
            <img src={m1} alt="" style={{ width: "24vw" }} />

            <div className="child">
              <img src={m2} style={{ width: "12vw" }} alt="" />
              <img src={m4} style={{ width: "12vw" }} alt="" />
            </div>
          </div>
        </div>
        <div className="reason-text">
          <div><h3>Some reasons</h3></div>
          <div className="point">
          <span className="strike-text">Why</span>
          <span> choose us</span></div>
          <div>

            <div>
              <i class="uil uil-check-circle"></i>
              i free programm for new member
            </div>
            <div>
              <i class="uil uil-check-circle"></i>
              over 140+ experts soaches
            </div>
            <div>
              <i class="uil uil-check-circle"></i>
              train smarter and faster than before 
            </div>
            <div>
              <i class="uil uil-check-circle"></i>
              reliable partners
            </div>
          </div>
          <div className="partner">
            <div className="head">
              <span>our partners</span>
              <div className="logos">
              <i class="uil uil-vuejs"></i>
              <i class="uil uil-pagerduty"></i>
              <i class="uil uil-adobe-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reason;
