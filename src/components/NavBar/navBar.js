import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    
    <div className="nav-bar">
      <img src={logo} className="logo" />
      <ul className="others-navbar">
        <li className="list-navbar">Support</li>
        <li className="list-navbar">Service</li>
        <li className="list-navbar">Contact us</li>
      </ul>
      <button className="admin-button">Admin Sign in</button>
    </div>
  );
};

export default NavBar;


