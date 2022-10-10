import React, { useState, useEffect } from "react";
import "./SignIn.css";
import digilogo from "../../assets/digilogo.png";
import Inputs from "../Inputs/Inputs";
import Buttons from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const LOCAL_STORAGE_KEY = "signedInData";

export default function SignIn() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [withAccount, setWithAccount] = useState(true);
  const [signInDatas, setSignInDatas] = useState({
    username: "",
    password: "",
  });
  const [userInput, setUserInput] = useState([]);
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    const localUserData = JSON.parse(localStorage.getItem("userKey"));
    if (localUserData) setLocalData(localUserData);
  }, []);

  const validateUser = () => {
    const userCheck = localData.find(
      (user) =>
        user.username === signInDatas.username &&
        user.password === signInDatas.password
    );
    if (userCheck) {
      setUserInput(userCheck);
      navigate("dashboard/home");
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(...userInput, {
          id: userCheck.id,
          firstName: userCheck.firstName,
          middleName: userCheck.middleName,
          lastName: userCheck.lastName,
          email: userCheck.email,
          username: userCheck.username,
          password: userCheck.password,
          confirmPassword: userCheck.confirmPassword,
          balance: userCheck.balance,
        })
      );
    } else {
      setIsError(true);
      setWithAccount(false);
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateUser(localData);
  };

  const handleInputChange = (e) => {
    setSignInDatas({ ...signInDatas, [e.target.name]: e.target.value });
  };
  const focusInput = () => {
    setIsError(false);
    setWithAccount(true);
  };
  function navigateToSignUpPage() {
    navigate("signUp");
  }

  return (
    <div className="sign-in-container">
      <img className="signInLogo" src={digilogo} alt="logo"></img>
      <div className="userAccessButtons">
        <Buttons
          className="signUpBtn"
          name="SIGN UP"
          onClick={navigateToSignUpPage}
        />
      </div>
      <form onSubmit={handleSubmit} className="signInComponent">
        <div className="username">
          <label className="labelName">Username</label>
          <Inputs
            className="sign-in-inputs"
            type="text"
            name="username"
            errorMessage="Username does not exist"
            placeholder="enter username"
            value={signInDatas.username}
            onChange={handleInputChange}
            onClick={focusInput}
            required
          />
        </div>
        <div className="password">
          <label className="labelName">Password</label>
          <Inputs
            className="sign-in-inputs"
            type="password"
            name="password"
            errorMessage="Incorrect password"
            placeholder="enter password"
            value={signInDatas.password}
            onChange={handleInputChange}
            onClick={focusInput}
            required
          />
        </div>
        <Buttons
          className={withAccount ? "signInBtn-enabled" : "signInBtn-disabled"}
          type="submit"
          name="Sign In"
        />
        <h2 className={isError ? "invalid" : "valid"}>
          Account does not exist
        </h2>
      </form>
    </div>
  );
}
