import React from "react";
import "./SignIn.css";
import logo from "../../assets/yourLogoHere.png";
import Username from "../../components/Inputs/Username/Username";
import Password from "../../components/Inputs/Password/Password";
import Inputs from "../Inputs/Inputs";
import Buttons from "../Buttons/Buttons";

export default function SignIn() {
  return (
    <div className="signInComponent">
      <img src={logo}></img>
      <div className="userAccessButtons">
        <Buttons name="SIGN UP" />
        <Buttons name="ADMIN SIGN IN" />
      </div>
      <div>
        <label>Username</label>
        <Inputs type="text" placeholder="enter username" />
      </div>
      <div className="password">
        <Password />
      </div>
      <Buttons name="Sign In" />
    </div>
  );
}
