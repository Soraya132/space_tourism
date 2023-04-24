import React from 'react'
import {Link,NavLink}from 'react-router-dom'
import {CgMenuLeft} from "react-icons/cg"
import { useState } from 'react'
import logo from "../assets/shared/logo.svg"
import "../App.css"



const Navbar = () => {
    const [show,setShow] = useState(false)
    return (
      <header className='absolute top-0 right-0 left-0 p-5'>
         <nav className='flex justify-between items-center navbar '>
            <div><img src={logo} alt="logo"/></div>
            <div className='lg:hidden flex text-white text-5xl' onClick={()=>setShow(!show)}><CgMenuLeft/></div>
            <ul className='px-5 py-3 items-center hidden lg:flex'>
              <li className='px-5'><NavLink className='text-xl 'to="/"><span  className='text-3xl'>00 </span>Home</NavLink></li>
              <li className='px-5'><NavLink className='text-xl' to="/destination" ><span  className='text-3xl'>01</span> Destination</NavLink></li>
              <li className='px-5'><NavLink className='text-xl' to ="crew"><span className='text-3xl'>02</span> Crew</NavLink></li>
              <li className='px-5'><NavLink className='text-xl' to="technology"><span className='text-3xl'>03</span> Technology</NavLink></li>
            </ul>
          </nav>
          {show && (
             <nav className='lg:hidden flex flex-col justify-center items-center absolute top-[90px] right-[15px] left-[15px] py-10 menu  z-10'>
             <ul className={show?"open close close-all":"open close"}>
                 <li className='px-2 my-10 text-xl'><NavLink to="/"><span>00 </span>Home</NavLink></li>
                 <li className='px-2 my-10 text-xl'><NavLink  to="destination"><span>01</span> Destination</NavLink></li>
                 <li className='px-2 my-10 text-xl'><NavLink to="/crew"><span>02</span> Crew</NavLink></li>
                 <li className='px-2 my-10 text-xl'><NavLink to="/technology"><span>03</span> Technology</NavLink></li>
               </ul>
             </nav>
          )}
         
      </header>
    )
  }
  export default Navbar
