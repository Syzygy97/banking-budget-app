import React from "react";
import "./Admin-Page.css";

export default function AdminPage() {
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

  return (
    <div className="admin-header">
      <div className="header-holder">
        <span>WELCOME ADMIN</span>
        <p>Status:</p>
        <button className="log-out-btn">LOG OUT</button>
      </div>
      <div className="admin-data-holder">
        <div className="content-list">
          <p className="name">Name</p>
          <p className="balance">Balance</p>
          <p></p>
        </div>
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
      </div>
    </div>
  );
}
