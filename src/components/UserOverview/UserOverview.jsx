import React from "react";
import "./UserOverview.css";

export default function UserOverview({ user }) {
  return (
    <div className="userOverview">
      <h1 className="userName">Hello, {user.username}</h1>
      <h3>Current balance</h3>
      <h1>10,000</h1>
    </div>
  );
}
