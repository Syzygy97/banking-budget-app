import React from "react";
import "./SideBar.css";
import logo from "../../assets/yourLogoHere.png";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <nav className="sideBar">
      <img src={logo} alt="logo" />
      <ul className="sideBarList">
        <li>
          <NavLink to="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="expenses">Planned Expenses</NavLink>
        </li>
        <li>
          <NavLink to="deposit">Deposit</NavLink>
        </li>
        <li>
          <NavLink to="withdraw">Withdraw</NavLink>
        </li>
        <li>
          <NavLink to="transfer">Transfer</NavLink>
        </li>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
      </ul>
      <div className="settings">⚙</div>
    </nav>
  );
}
