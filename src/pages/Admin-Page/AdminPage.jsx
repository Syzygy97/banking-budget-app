import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import "./AdminPage.css";

export default function AdminPage() {
  const navigate = useNavigate();
  const localUserData = JSON.parse(localStorage.getItem("userKey"));
  console.log(localUserData);
  // const [adminData, setAdminData] = useState(adminList);
  // const { firstName, balance } = adminList;
  // const [firstName, setFirstName] = useState("");
  // const [middleName, setMiddleName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [balance, setBalace] = useState("");
  // console.log(adminList.firstName);s
  // console.log("adminListName", [...adminList].firstName);
  // console.log("adminList", adminList);
  // console.log("adminData", adminData);
  // console.log("adminData2", [adminData]);
  // console.log("adminData3", ...[adminData]);
  // setAdminData((prevList) => {
  //   return [...prevList, ...adminData];
  // });
  //   setAdminData((prevData) => {
  //     return { ...prevData, newUserObj };
  //   });
  //   console.log("admin", adminData);
  // };
  const handleAdminDelete = () => {
    // setAdminData([]);
  };
  const navigateToSignUpPage = (e) => {
    e.preventDefault();
    navigate("/signUp");
  };
  return (
    <div className="admin-page-container">
      <h1>USER LIST</h1>
      <Buttons name="Sign Up" onClick={navigateToSignUpPage} />
      <div className="user-label">
        <label>First Name</label>
        <label>Balance</label>
        <label>Status</label>
      </div>
      <div className="user-list-container">
        <ul>
          {localUserData.map((data) => {
            return (
              <li key={data.id}>
                <div className="user-list">
                  <div className="user-first-name">
                    <h2>{data.firstName}</h2>
                  </div>
                  <div className="user-balance">
                    <h2>{data.balance}</h2>
                  </div>
                  <div className="user-account-status">
                    <h2>PENDING</h2>
                    <h2>✔</h2>
                    <h2>✖</h2>
                    <h2>edit</h2>
                    <h2>delete</h2>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className="admin-page-container">
        <h1>USER LIST</h1>
        <div className="user-label">
          <label>First Name</label>
          <label>Balance</label>
          <label>Status</label>
        </div>
        <div className="user-list">
          <div className="user-first-name">
            <h2>{adminData.firstName}</h2>
          </div>
          <div className="user-balance">
            <h2>{adminData.balance}</h2>
          </div>
          <div className="user-account-status">
            <h2>PENDING</h2>
            <h2>✔</h2>
            <h2>✖</h2>
            <h2>edit</h2>
            <h2>delete</h2>
          </div>
        </div>
      </div> */}
    </div>
  );
}
