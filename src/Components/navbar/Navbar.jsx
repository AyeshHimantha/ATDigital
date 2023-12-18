import React, { useRef } from 'react';
import "./navbar.css";
import logo from "../../Assets/Logo.png"
import { FaTimes, FaBars } from "react-icons/fa"

function Navbar() {

  // responsive navbar function
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  // button hide function
  const btnRef = useRef();

  const hidebtn = () => {
    btnRef.current.classList.toggle("btn_hide");
  }

  return (
    <div className="section navbar">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="At Digital Logo" />
        </a>
      </div>
      <nav ref={navRef} className='menu'>
        <a href="#" className='menu-item'>Home</a>
        <a href="#" className='menu-item'>About Us</a>
        <a href="#" className='menu-item'>Contact Us</a>
        <a href="#" className='menu-item'>Careers</a>
        <button ref={btnRef} className='nav-btn nav-close-btn' onClick={() => { hidebtn(); showNavbar(); }}>
          <FaTimes />
        </button>
      </nav>
      <button ref={btnRef} className='nav-btn nav-open-btn' onClick={() => { hidebtn(); showNavbar(); }}>
        <FaBars />
      </button>
    </div>
  )
}

export default Navbar;