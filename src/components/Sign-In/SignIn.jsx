import React, { useState } from "react";
import "./SignIn.css";
import logo from "../../assets/yourLogoHere.png";
import Inputs from "../Inputs/Inputs";
import Buttons from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!username || !password) return;
    navigate("dashboard/home");
    console.log(username, password);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function navigateToSignUpPage() {
    navigate("signUp");
  }

  return (
    <div className="sign-in-container">
      <img src={logo} alt="logo"></img>
      <div className="userAccessButtons">
        <Buttons name="SIGN UP" onClick={navigateToSignUpPage} />
      </div>
      <form onSubmit={handleSubmit} className="signInComponent">
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
          type="submit"
          name="Sign In"
          // onClick={navigateToDashboard}
        />
      </form>
    </div>
  );
}
