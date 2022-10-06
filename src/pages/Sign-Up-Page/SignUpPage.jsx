import React, { useEffect, useState } from "react";
import "./SignUp.css";
import logo from "../../assets/yourLogoHere.png";
import "../../components/Inputs/Inputs";
import Buttons from "../../components/Buttons/Buttons";
import Inputs from "../../components/Inputs/Inputs";
import { useNavigate } from "react-router-dom";

const LOCAL_STORAGE_KEY = "userKey";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    balance: "",
  });
  const [userDatas, setUserDatas] = useState([]);

  const dataInputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "enter first name",
      label: "First Name",
    },
    {
      id: 2,
      name: "middleName",
      type: "text",
      placeholder: "enter middle name",
      label: "Middle Name",
    },
    {
      id: 3,
      name: "lastName",
      type: "text",
      placeholder: "enter last name",
      label: "Last Name",
    },
    {
      id: 4,
      name: "username",
      type: "text",
      placeholder: "enter username",
      label: "Username",
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "enter e-mail",
      label: "E-mail",
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "enter password",
      label: "Password",
    },
    {
      id: 7,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirm password",
      label: "Confirm Password",
    },
    {
      id: 8,
      name: "balance",
      type: "number",
      placeholder: "enter balance",
      label: "Initial Balance",
    },
  ];
  // const newUserData2 = [userData].map((data) => ({ ...data }));
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const newUserData = {
      id: new Date().getTime(),
      firstName: userData.firstName,
      middleName: userData.middleName,
      lastName: userData.lastName,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      balance: userData.balance,
    };
    setUserData({
      ...userData,
      firstName: "",
      middleName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      balance: "",
    });
    setUserDatas((prevData) => {
      return [...prevData, newUserData];
    });
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...userDatas, newUserData])
    );
    console.log("userDatas after submission", userDatas);
    navigate("/adminPage");
  };

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const localUserData = JSON.parse(localStorage.getItem("userKey"));
    if (localUserData) setUserDatas(localUserData);
  }, []);

  return (
    <div className="signUpPage">
      <section className="signUpBg"></section>
      <section className="signUpInputsContainer">
        <img src={logo} alt="logo"></img>
        <form onSubmit={handleSignUpSubmit} className="signUpInputs">
          {dataInputs.map((input) => (
            <Inputs
              key={input.id}
              {...input}
              value={userData[input.name]}
              onChange={onChange}
            />
          ))}
          <Buttons type="submit" name="Create Account" />
          {/* <div>
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
          </div> */}
        </form>
      </section>
    </div>
  );
}
