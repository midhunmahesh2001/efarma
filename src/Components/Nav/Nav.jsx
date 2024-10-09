import React, { useCallback, useState } from 'react'
import './Nav.css'
import logo from '../../assets/ecclogo.png'

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  }
  return (
    <nav  className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="/" className='logo'>
        <img src={logo} alt="" />
        </a>

        <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>

        <ul  className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/">Medicines</a></li>
            <li><a href="/">Lab tests</a></li>
            <li><a href="/">Consult doctor</a></li>
            <li><a href="/login">Login/Sign Up</a></li>
            <li><a href="/">Your orders</a></li>
        </ul>
    </nav>
  )
}

export default Nav