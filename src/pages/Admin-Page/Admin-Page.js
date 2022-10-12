import React, { useState } from "react";
import SignUpPage from "../Sign-Up-Page/SignUpPage";
import "./Admin-Page.css";

export default function AdminPage() {
  // const [newUser, setNewUser] = useState({
  //   firstName: "",
  //   middleName: "",
  //   lastName: "",
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   balance: "",
  // })
  // const [users, setUsers] = useState([])

  const dataName = [
    {
      username: "Pot",
      password: "admin",
      balance: 100,
    },
    {
      username: "Mac",
      password: "admin",
      balance: 0,
    },
  ];

  // const addUser = () => {
  //   if (newUser) {
  //     const createUser = {
  //       id: new Date().getTime().toString(),
  //       firstName: ,
  //       middleName: ,
  //       lastName: ,
  //       email: ,
  //       username: ,
  //     };
  //     setExpenses([...expenses, newExpense]);
  //     localStorage.setItem(
  //       "expenses",
  //       JSON.stringify([...expenses, newExpense])
  //     );
  //     setExpense("");
  //     setParticular("");
  //   }
  // };

  return (
    <div className="admin-header">
      <div className="header-holder">
        <span>WELCOME ADMIN</span>
        <p>Status:</p>
        <button className="log-out-btn">LOG OUT</button>
      </div>
      <div className="admin-data-holder">
        {/* <div className="content-list">
          <p className="name">Name</p>
          <p className="balance">Balance</p>
          <p></p>
        </div> */}
        <ul className="admin-list">
          {dataName.map((user) => {
            return (
              <li>
                <p>{user.username}</p>
                <p>{user.balance}</p>
                <button className="delete-user">delete user</button>
              </li>
            );
          })}
        </ul>
        <SignUpPage></SignUpPage>
      </div>
    </div>
  );
}
