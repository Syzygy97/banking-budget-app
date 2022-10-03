import React from "react";
import "./DashboardHome.css";
import DepositHistory from "../../History/Deposit History/DepositHistory";
import WithdrawHistory from "../../History/Withdraw History/WithdrawHistory";

export default function DashboardHome() {
  return (
    <div className="dashboardHome">
      <figure className="lineGraph">
        <h1>$10,000.00</h1>
        <h3>Current Balance</h3>
      </figure>
      <DepositHistory className="depositHistoryList" />
      <WithdrawHistory className="withdrawHistoryList" />
    </div>
  );
}
