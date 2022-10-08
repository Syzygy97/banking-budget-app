import React from "react";
import Buttons from "../Buttons/Buttons";
import Inputs from "../Inputs/Inputs";
import Notes from "../Notes-Input/Notes";
import "./Transactions.css";

export default function Transactions() {
  return (
    <div className="transactions-container">
      <label className="withdraw-amount">AMOUNT</label>
      <Inputs className="withdraw-input" type="number" placeholder="enter amount" />
      <label className="notes-label">Notes (Optional)</label>
      <Notes className="notes-section" name="notes" rows="5" cols="50" placeholder="enter notes here" />
      <Buttons className="confirm-btn" name="Confirm" />
    </div>
  );
}
