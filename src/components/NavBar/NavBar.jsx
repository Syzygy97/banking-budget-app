import React from "react";
import "./NavBar.css";
import logo from "../../assets/mainlogo.png";
import Buttons from "../Buttons/Buttons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} className="logo" alt="logo" />
      <ul className="others-navbar">
        <li className="list-navbar">Support</li>
        <li className="list-navbar">Service</li>
        <li className="list-navbar">Contact us</li>
        <li className="list-navbar">
          <NavLink to="/adminSignIn">
            <Buttons className="admin-button" name="Admin Sign in" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
