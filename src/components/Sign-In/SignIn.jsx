import React, { useState } from "react";
import "./SignIn.css";
import logo from "../../assets/yourLogoHere.png";
import Inputs from "../Inputs/Inputs";
import Buttons from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  function navigateToDashboard() {
    navigate("dashboard/home");
  }

  function navigateToSignUpPage() {
    navigate("signUp");
  }

  return (
    <form className="signInComponent">
      <img src={logo} alt="logo"></img>
      <div className="userAccessButtons">
        <Buttons name="SIGN UP" onClick={navigateToSignUpPage} />
      </div>
      <div className="username">
        <label>Username</label>
        <Inputs
          type="text"
          placeholder="enter username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div className="password">
        <label>Password</label>
        <Inputs
          type="password"
          placeholder="enter password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <Buttons
        className="signInBtn"
        name="Sign In"
        onClick={navigateToDashboard}
      />
    </form>
  );
}
