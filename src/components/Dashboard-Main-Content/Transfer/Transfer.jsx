import React from "react";
import "./Transfer.css";
import Transactions from "../../Transactions/Transactions";
import TransferHistory from "../../History/Transfer History/TransferHistory";
import Inputs from "../../Inputs/Inputs";

export default function Transfer() {
  return (
    <>
      <div className="transfer-transactions">
        <h1>Send money to other account</h1>
        <label>Account Name</label>
        <Inputs type="text" placeholder="enter account name here" />
        <Transactions />
      </div>
      <TransferHistory />
    </>
  );
}
