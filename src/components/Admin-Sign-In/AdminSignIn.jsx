import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import Inputs from "../Inputs/Inputs";
import "./AdminSignIn.css";

export default function AdminSignIn() {
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (adminUsername === "admin" && adminPassword === "admin12345") {
      navigate("/adminPage");
    }
    return;
  };
  const handleAdminUsername = (e) => {
    setAdminUsername(e.target.value);
  };
  const handleAdminPassword = (e) => {
    setAdminPassword(e.target.value);
  };
  function navigateToSignInComponent() {
    navigate("/");
  }
  return (
    <div className="admin-sign-in-container">
      <h1>ADMIN SIGN IN</h1>
      <div className="userAccessButtons">
        <Buttons name="USER SIGN IN" onClick={navigateToSignInComponent} />
      </div>
      <form onSubmit={handleSubmit} className="adminSignInComponent">
        <div className="adminUsername">
          <label>Username</label>
          <Inputs
            type="text"
            placeholder="enter admin username"
            value={adminUsername}
            onChange={handleAdminUsername}
          />
        </div>
        <div className="adminPassword">
          <label>Password</label>
          <Inputs
            type="password"
            placeholder="enter admin password"
            value={adminPassword}
            onChange={handleAdminPassword}
          />
        </div>
        <Buttons
          className="signInBtn"
          type="submit"
          name="Sign In"
          // onClick={navigateToDashboard}
        />
      </form>
    </div>
  );
}
