import React from "react";
import "./UserOverview.css";
import visaLogo from "../../assets/visaTransparent.png";
import Buttons from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import Contacts from "../Contacts";

export default function UserOverview({ userInfo }) {
  const { balance } = userInfo;
  const balanceInt = parseFloat(balance);
  const money = balanceInt.toLocaleString();
  const navigate = useNavigate();
  const navigateToLandingPage = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="userOverview">
      <h1 className="user-name">Hello, {userInfo.username}</h1>
      <small>Wallet</small>
      <figure className="user-profile">
        <img src={visaLogo} alt="visa" />
        <div className="profile-details">
          <h2>Active balance</h2>
          <h1>₱ {money}</h1>
        </div>
        <div className="card-details">
          <h2>
            {userInfo.lastName}, {userInfo.firstName}
          </h2>
          <h2>04/24</h2>
        </div>
      </figure>
      <Contacts />
      <Buttons
        className="log-out-btn"
        name="Logout"
        onClick={navigateToLandingPage}
      />
    </div>
  );
}
