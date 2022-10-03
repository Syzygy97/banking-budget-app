import React, { useState } from "react";
import "./SignIn.css";
import logo from "../../assets/yourLogoHere.png";
import Inputs from "../Inputs/Inputs";
import Buttons from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";

export default function SignIn({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!username || !password) return;
    setUser({ username: username, password: password });
    navigate("dashboard/home");
    console.log(username, password);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function navigateToDashboard() {
    navigate("dashboard/home");
  }

  function navigateToSignUpPage() {
    navigate("signUp");
  }

  return (
    <form onSubmit={handleSubmit} className="signInComponent">
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
        type="submit"
        name="Sign In"
        // onClick={navigateToDashboard}
      />
    </form>
  );
}
