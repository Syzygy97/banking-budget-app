import React from "react";
import "./SignUp.css";
import logo from "../../assets/yourLogoHere.png";
import Username from "../../components/Inputs/Username/Username";
import FirstName from "../../components/Inputs/FirstName/FirstName";
import MiddleName from "../../components/Inputs/MiddleName/MiddleName";
import LastName from "../../components/Inputs/LastName/LastName";
import Email from "../../components/Inputs/Email/Email";
import Password from "../../components/Inputs/Password/Password";
import PasswordConfirmation from "../../components/Inputs/PasswordConfirmation/PasswordConfirmation";
import MoneyBalance from "../../components/Inputs/MoneyBalance/MoneyBalance";
import Buttons from "../../components/Buttons/Buttons";

export default function SignUpPage() {
  return (
    <div className="signUpPage">
      <section className="signUpBg"></section>
      <section className="signUpInputsContainer">
        <img src={logo}></img>
        <form className="signUpInputs">
          <div>
            <FirstName />
          </div>
          <div>
            <MiddleName />
          </div>
          <div>
            <LastName />
          </div>
          <div>
            <Username />
          </div>
          <div>
            <Email />
          </div>
          <div>
            <Password />
          </div>
          <div>
            <PasswordConfirmation />
          </div>
          <div>
            <MoneyBalance />
          </div>
        </form>
        <Buttons name="Create Account" />
      </section>
    </div>
  );
}
