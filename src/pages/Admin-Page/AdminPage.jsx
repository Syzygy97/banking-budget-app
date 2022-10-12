import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import AdminPageSignup from "../Admin Page Signup/AdminPageSignup";
// import SignUpPage from "../Sign-Up-Page/SignUpPage";
import "./AdminPage.css";

export default function AdminPage() {
  const navigate = useNavigate();
  const [userList, setList] = useState([]);
  useEffect(() => {
    const localUserData = JSON.parse(localStorage.getItem("userKey"));
    if (localUserData) setList(localUserData);
  }, []);

  const navigateToMainPage = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="admin-page-container">
      <h1>USER ACCOUNT LIST</h1>
      <Buttons
        className="back-to-main-btn"
        name="Back to Main Page"
        onClick={navigateToMainPage}
      />
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
                    <h2>₱ {parseFloat(data.balance).toLocaleString()}</h2>
                  </div>
                  <div className="user-account-status">
                    <h2>Active</h2>
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
        <AdminPageSignup></AdminPageSignup>
      </div>
    </div>
  );
}
