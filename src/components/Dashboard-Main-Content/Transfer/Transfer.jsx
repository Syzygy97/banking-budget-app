import React from "react";
import "./Transfer.css";
import Transactions from "../../Transactions/Transactions";
import TransferHistory from "../../History/Transfer History/TransferHistory";
import Inputs from "../../Inputs/Inputs";
import Buttons from "../../Buttons/Buttons";

export default function Transfer() {
  return (
    <div className="transfer-container">
      <form className="transfer-transactions">
        <h1 className="transfer-description">Send money to other account</h1>
        <label>Amount</label>
        <Inputs
          className="transfer-input"
          type="number"
          min="0"
          step="0.01"
          name="balance"
        />
        <Transactions name="balance" />
        <Buttons type="submit" name="Transfer" className="transfer-btn" />
      </form>
      <TransferHistory className="transfer-history" />
    </div>
  );
}
