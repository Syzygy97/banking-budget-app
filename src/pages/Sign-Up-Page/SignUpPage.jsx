import React from "react";
import "./SignUp.css";
import logo from "../../assets/yourLogoHere.png";
import "../../components/Inputs/Inputs";
import Buttons from "../../components/Buttons/Buttons";
import Inputs from "../../components/Inputs/Inputs";

export default function SignUpPage() {
  return (
    <div className="signUpPage">
      <section className="signUpBg"></section>
      <section className="signUpInputsContainer">
        <img src={logo} alt="logo"></img>
        <form className="signUpInputs">
          <div>
            <label>First Name</label>
            <Inputs type="text" placeholder="enter first name" />
          </div>
          <div>
            <label>Middle Name</label>
            <Inputs type="text" placeholder="enter middle name" />
          </div>
          <div>
            <label>Last Name</label>
            <Inputs type="text" placeholder="enter last name" />
          </div>
          <div>
            <label>Username</label>
            <Inputs type="text" placeholder="enter username" />
          </div>
          <div>
            <label>E-mail</label>
            <Inputs type="email" placeholder="enter email" />
          </div>
          <div>
            <label>Password</label>
            <Inputs type="password" placeholder="enter password" />
          </div>
          <div>
            <label>Re-type Password</label>
            <Inputs type="password" placeholder="confirm password" />
          </div>
          <div>
            <label>Initial Balance</label>
            <Inputs type="number" placeholder="enter balance" />
          </div>
        </form>
        <Buttons name="Create Account" />
      </section>
    </div>
  );
}
