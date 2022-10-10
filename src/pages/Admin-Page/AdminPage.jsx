import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import "./AdminPage.css";

export default function AdminPage() {
  const navigate = useNavigate();
  const [userList, setList] = useState([]);
  useEffect(() => {
    const localUserData = JSON.parse(localStorage.getItem("userKey"));
    if (localUserData) setList(localUserData);
  }, []);
  console.log("local", userList);
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
          {userList.map((data) => {
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
    </div>
  );
}
