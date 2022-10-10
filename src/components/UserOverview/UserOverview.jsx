import React from "react";
import "./UserOverview.css";

export default function UserOverview({ userInfo }) {
  return (
    <div className="userOverview">
      <h1 className="userName">Hello, {userInfo.username}</h1>
      <h3>Current balance</h3>
      <h1>{userInfo.balance}</h1>
    </div>
  );
}
