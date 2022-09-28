import React from "react";
import logo from "../../assets/yourLogoHere.png";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sideBar">
      <img src={logo} />
      <ul className="sideBarList">
        <li>Home</li>
        <li>Planned Expenses</li>
        <li>Deposit</li>
        <li>Withdraw</li>
        <li>Transfer</li>
        <li>Profile</li>
      </ul>
      <div className="settings">⚙</div>
    </div>
  );
}
