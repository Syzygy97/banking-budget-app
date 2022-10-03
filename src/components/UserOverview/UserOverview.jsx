import React from "react";
import "./UserOverview.css";

export default function UserOverview() {
  return (
    <div className="userOverview">
      <h1 className="userName">Hello, Username</h1>
      <h3>Current balance</h3>
      <h1>10,000</h1>
    </div>
  );
}
