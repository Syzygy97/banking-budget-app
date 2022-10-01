import React from "react";
import "./SignIn.css";
import logo from "../../assets/yourLogoHere.png";
import Inputs from "../Inputs/Inputs";
import Buttons from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  function navigateToDashboard() {
    navigate("dashboard");
  }

  function navigateToSignUpPage() {
    navigate("signUp");
  }

  return (
    <div className="signInComponent">
      <img src={logo}></img>
      <div className="userAccessButtons">
        <Buttons name="SIGN UP" onClick={navigateToSignUpPage} />
        <Buttons name="ADMIN SIGN IN" />
      </div>
      <div>
        <label>Username</label>
        <Inputs type="text" placeholder="enter username" />
      </div>
      <div className="password">
        <label>Password</label>
        <Inputs type="password" placeholder="enter password" />
      </div>
      <Buttons
        className="signInBtn"
        name="Sign In"
        onClick={navigateToDashboard}
      />
    </div>
  );
}
