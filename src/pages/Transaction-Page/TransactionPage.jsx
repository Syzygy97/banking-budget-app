import React from "react";
import "./TransactionPage.css";

export default function TransactionPage() {
  return (
    <div className="transactionPage">
      <figure className="lineGraph">
        <h1>$10,000.00</h1>
        <h3>Current Balance</h3>
      </figure>
      <div className="depositHistoryList">
        <h1>DEPOSIT HISTORY</h1>
        {/* <Todolist /> */}
      </div>
      <div className="withdrawHistoryList">
        <h1>WITHDRAW HISTORY</h1>
      </div>
    </div>
  );
}
