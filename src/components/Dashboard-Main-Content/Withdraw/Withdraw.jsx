import React from "react";
import WithdrawHistory from "../../History/Withdraw History/WithdrawHistory";
import Transactions from "../../Transactions/Transactions";
import "./Withdraw.css";

export default function Withdraw() {
  return (
    <>
      <div className="withdraw-transactions">
        <h1>Withdraw money from your account</h1>
        <Transactions />
      </div>
      <WithdrawHistory className="withdraw-history" />
    </>
  );
}
