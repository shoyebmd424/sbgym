import React, { useState } from 'react'
import './Header.css';
import logo from '../gym-image/channel-removebg-preview.png';
import {Link} from 'react-scroll';
function Header() {
  const mobile=window.innerWidth<=1000?true:false;
  const [menuopend, setmenu]=useState(false); 
  return (
    <>
      <div id='hero' className="header">
        <img className='logo' src={logo} alt="" />

        {(menuopend===false&&mobile===true)?(
          < div onClick={()=>setmenu(true)}><i class="uil uil-bars"></i></div>
        ):
        <ul className='header-menu'>
       <div className='cross' onClick={()=>setmenu(false)}>  <i class="uil uil-times"></i></div>
        <li> <Link to='hero'
             spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={()=>setmenu(false)}> Home</Link> </li>
        <li onClick={()=>setmenu(false)}>  <Link  to='program'
             spy={true}
              smooth={true}
              offset={50}
              duration={500}>program</Link> </li>

        <li> <Link to='why'
             spy={true}
              smooth={true}
              offset={50}
              duration={500}
               onClick={()=>setmenu(false)} >Why us </Link> </li>
        <li>  <Link to='plan'
             spy={true}
              smooth={true}
              offset={50}
              duration={500}
               onClick={()=>setmenu(false)} >Plan </Link></li>
        <li >
           <Link onClick={()=>setmenu(false)}
            to='testimonials'
             spy={true}
              smooth={true}
              offset={50}
              duration={500}> Testimonials</Link></li>
        </ul>
        }
        
      </div>
    </>
  )
}

export default Header;
