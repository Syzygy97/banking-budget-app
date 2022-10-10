import React from "react";
import "./SideBar.css";
import digibank1 from "../../assets/digibank1.png";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <nav className="sideBar">
      <img src={digibank1} alt="logo" />
      <ul className="sideBarList">
        <li>
          <NavLink className="lists" to="home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="lists" to="expenses">
            Planned Expenses
          </NavLink>
        </li>
        <li>
          <NavLink className="lists" to="deposit">
            Deposit
          </NavLink>
        </li>
        <li>
          <NavLink className="lists" to="withdraw">
            Withdraw
          </NavLink>
        </li>
        <li>
          <NavLink className="lists" to="transfer">
            Transfer
          </NavLink>
        </li>
        <li>
          <NavLink id="profile" className="lists" to="profile">
            Profile
          </NavLink>
        </li>
      </ul>
      <div className="settings">⚙</div>
    </nav>
  );
}
