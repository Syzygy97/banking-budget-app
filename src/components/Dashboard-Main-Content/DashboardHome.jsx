import React from "react";
import "./DashboardHome.css";

export default function DashboardHome() {
  return (
    <div className="dashboardHome">
      <figure className="lineGraph">
        <h1>$10,000.00</h1>
        <h3>Current Balance</h3>
      </figure>
      <div className="depositHistoryList">
        <h1>DEPOSIT HISTORY</h1>
      </div>
      <div className="withdrawHistoryList">
        <h1>WITHDRAW HISTORY</h1>
      </div>
    </div>
  );
}
