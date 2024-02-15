import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import profile from '../assets/adminprof.jpg';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo-container">
        <img width='40px' height='40px' src={logo} alt="" className='nav-logo' />
        <span>Game<span style={{ color: '#2E8BC0', fontWeight: 'bold' }}>Mart</span></span>
      </div>
      <img width='40px' height='40px' className='nav-profile rounded-5' src={profile} alt="" />
    </div>
  );
}

export default Navbar;
