import React from "react";
import "./Plan.css";
import { plandata } from "../../data/plandata";
import { NavLink } from "react-router-dom";
function Plan() {
  return (
    <>
      <div className="plan" id="plan">
        <div className="blur plan-blur-1"></div>
        <div className="blur plan-blur-2"></div>
        <div className="plan-head">
          <span className="strike-text">ready to start</span>
          <span> your name</span>
          <span className="strike-text"> Now with us</span>
        </div>
        <div className="plancards">
          {plandata.map((plan) => (
            <div className="plan-card">
              <span>{plan.icon}</span>
              <div>
                <h2>{plan.name}</h2>
              </div>
              <div>
                <h3>{plan.price}</h3>
              </div>
              <div className="bulletpoints">
                <div>
                  {" "}
                  <i class="uil uil-check-circle"></i>
                  {plan.time}
                </div>
                <div>
                  {" "}
                  <i class="uil uil-check-circle"></i>
                  {plan.coaches}
                </div>
                <div>
                  <i class="uil uil-check-circle"> </i>
                  {plan.community}
                </div>
              </div>
              <div>
                <NavLink to="/join">
                  see more benifit<i class="uil uil-arrow-right"></i>
                </NavLink>
              </div>
              <div className="btnn">
                <NavLink className="button" to="/join">
                  Join Now
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
console.log(plandata);
export default Plan;
