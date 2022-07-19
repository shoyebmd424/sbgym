import React from "react";
import "./Program.css";
import { programdata } from "../../../data/alldata";
import { NavLink } from "react-router-dom";
function Program() {
  return (
    <>
      <div className="program" id="program">
        <div className="program-header">
          <span className="strike-text">Explore our</span>
          <span>Programs</span>
          <span className="strike-text">to shape you</span>
        </div>
        <div className="cards">
          
         {programdata.map((program)=>(
          <div className="card">
            {program.icon}
            <div>
              <h3>{program.name}</h3>
            </div>
            <div>
              <p>
               {program.about}
              </p>
            </div>
            <div>
             <NavLink to="/join"> <span>Join Now</span> <i class="uil uil-arrow-right"></i></NavLink>
            </div>
          </div>
          ))} 
        </div>
      </div>
    </>
  );
}

export default Program;
