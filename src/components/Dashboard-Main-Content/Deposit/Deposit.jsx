import React from "react";
import "./Deposit.css";
import DepositHistory from "../../History/Deposit History/DepositHistory";
import Transactions from "../../Transactions/Transactions";

export default function Deposit() {
  return (
    <>
      <div className="deposit-transactions">
        <h1 className="add-money">Add money to your account</h1>
        <Transactions />
      </div>
      <DepositHistory className="deposit-history" />
    </>
  );
}
