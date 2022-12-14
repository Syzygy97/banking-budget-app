import "./AdminPageSignup.css";
import React, { useEffect, useState } from "react";
import digilogo2 from "../../assets/digilogo2.png";
import "../../components/Inputs/Inputs";
import Buttons from "../../components/Buttons/Buttons";
import Inputs from "../../components/Inputs/Inputs";
import { Link, useNavigate } from "react-router-dom";

const LOCAL_STORAGE_KEY = "userKey";

export default function AdminPageSignup() {
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
      errorMessage:
        "First name should not include any number or special character!",
      label: "First Name",
      pattern: "^[A-Za-z]+$",
      required: true,
    },
    {
      id: 2,
      name: "middleName",
      type: "text",
      placeholder: "enter middle name",
      errorMessage:
        "Middle name should not include any number or special character!",
      label: "Middle Name",
      pattern: "^[A-Za-z]+$",
      required: true,
    },
    {
      id: 3,
      name: "lastName",
      type: "text",
      placeholder: "enter last name",
      errorMessage:
        "Last name should not include any number or special character!",
      label: "Last Name",
      pattern: "^[A-Za-z]+$",
      required: true,
    },
    {
      id: 4,
      name: "username",
      type: "text",
      placeholder: "enter username",
      errorMessage:
        "Username should be 3-16 characters and does not include any special character!",
      label: "Username",
      pattern: "^[a-zA-Z]([._-]?[a-zA-Z0-9]{2,16})$",
      required: true,
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "enter e-mail",
      errorMessage: "It should be a valid e-mail address",
      label: "E-mail",
      required: true,
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "enter password",
      errorMessage:
        "Password should be 8-20 characters long and should include at least 1 letter, number and special character",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_+])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 7,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirm password",
      errorMessage: "Password does not match!",
      label: "Confirm Password",
      pattern: userData.password,
      required: true,
    },
    {
      id: 8,
      name: "balance",
      type: "number",
      min: "0",
      step: "0.01",
      placeholder: "enter balance",
      errorMessage:
        "No negative amount and up to hundredths decimal only (ex. Amount.00)",
      label: "Initial Balance",
      required: true,
    },
  ];
  const handleSignUpSubmit = (e) => {
    const newUserData = {
      id: new Date().getTime(),
      firstName: userData.firstName,
      middleName: userData.middleName,
      lastName: userData.lastName,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      balance: parseFloat(userData.balance, 10).toString(),
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
    // navigate("/");
    window.location.reload();
  };

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const localUserData = JSON.parse(localStorage.getItem("userKey"));
    if (localUserData) setUserDatas(localUserData);
  }, []);

  return (
    <div className="signUpInputsContainer">
      <form className="signUpInputs">
        {dataInputs.map((input) => (
          <Inputs
            className="signUpPageInput"
            key={input.id}
            {...input}
            value={userData[input.name]}
            onChange={onChange}
          />
        ))}
        <button
          className="create-btn"
          type="submit"
          onClick={handleSignUpSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
}
