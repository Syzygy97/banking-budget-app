import React, { useState, useEffect } from "react";
import "./SignIn.css";
import logo from "../../assets/yourLogoHere.png";
import Inputs from "../Inputs/Inputs";
import Buttons from "../Buttons/Buttons";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [signInDatas, setSignInDatas] = useState({
    username: "",
    password: "",
  });

  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    const localUserData = JSON.parse(localStorage.getItem("userKey"));
    if (localUserData) setLocalData(localUserData);
  }, []);

  // const registeredUsername = localData.map((item) => {
  //   return item.username;
  // });

  // const registeredPassword = localData.map((item) => {
  //   return item.password;
  // });
  // console.log("registeredUserName", registeredUsername);
  // console.log("registeredUserName", registeredUsername);
  // console.log("registeredPassword", registeredPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateUser = () => {
      const userCheck = localData.find(
        (user) =>
          user.username === signInDatas.username &&
          user.password === signInDatas.password
      );
      if (userCheck) {
        console.log("Success");
        navigate("dashboard/home");
      } else {
        console.log("Failed");
        return;
      }
      console.log(userCheck);
    };
    validateUser(localData);
    // if (
    //   [registeredUsername[0]].includes(username) &&
    //   [registeredPassword[0]].includes(password)
    // ) {
  };
  // const validateUser = () => {
  //   const userCheck = localData.find(
  //     (user) =>
  //       user.username === signInDatas.username &&
  //       user.password === signInDatas.password
  //   );
  //   if (userCheck) {
  //     console.log("Success");
  //   } else {
  //     console.log("Failed");
  //   }
  //   console.log(userCheck);
  // };
  // useEffect(() => {
  //   validateUser(localData);
  // }, [signInDatas.username, signInDatas.password]);
  // console.log(signInDatas);

  const handleInputChange = (e) => {
    setSignInDatas({ ...signInDatas, [e.target.name]: e.target.value });
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
            name="username"
            placeholder="enter username"
            value={signInDatas.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="password">
          <label>Password</label>
          <Inputs
            type="password"
            name="password"
            placeholder="enter password"
            value={signInDatas.password}
            onChange={handleInputChange}
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
