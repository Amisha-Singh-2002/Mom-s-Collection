import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="logo">
       
     <nav className="navbar">
     <div className="div1">
            Mom's Collections
        </div>
        <ul className="nav-list">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
            <li className="nav-item"><a href="/product" className="nav-link">Product</a></li>
        
        </ul>
    
        </nav>
    </div>
  );
};

export default Navbar;
