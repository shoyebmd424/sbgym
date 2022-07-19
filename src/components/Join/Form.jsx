import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./join.css";
import emailjs from '@emailjs/browser';

function Form() {
    
    const form = useRef();
  const [name,setname] =useState("");
  const [email,setemail] =useState("");
  const [contact,setcontact] =useState("");
  const [dob,setdob] =useState("");
  const ename=(event)=>{ setname(event.target.value); }
  const eemail=(event)=>{ setemail(event.target.value); }
  const econtact=(event)=>{ setcontact(event.target.value); }
  const edob=(event)=>{ setdob(event.target.value); }
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_epe997h', 'template_x4eui4q', form.current, 'WvDZ4qFBR6DGGOMNt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setcontact('');
        setdob('');
        setname('');
        setemail("");

    };
  return (
    <>
   <div style={{padding:"1rem"}}>  <NavLink to="/"> <i class="uil uil-arrow-left"></i> </NavLink></div>
      <div className="joining-form">
        <form  ref={form} onSubmit={sendEmail} className="form-content" action="">
          <div >
            <div>
              <label htmlFor="Name">Name</label>
              <input type="text" onChange={ename} value={name} name="name" />
            </div>
            <div>
              <legend>Choose your gender:</legend>
              <label htmlfor="male">Male</label>
              <input 
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked
              />
              <label style={{ marginLeft: "116px" }} htmlfor="female">
                Female
              </label>
              <input type="radio" name="gender" id="female" value="female" />
            </div>
            <div>
              <label htmlFor="Age">Date of Birth</label>
              <input value={dob} onChange={edob} name="date_of_birth" type="date" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
            <input value={email} onChange={eemail} name="email" type="email" />
            </div>
            <div>
              <label htmlFor="contact">Mobile Number</label>
              <input value={contact} onChange={econtact} name="contact" type="number" />
            </div>
            <div className="btns">
              <button className="btn">Submit</button>
              <button className="btn"> <NavLink id="back" to="/"> Back </NavLink></button>
            </div>
        
            
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
