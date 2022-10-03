import React from "react";
import Buttons from "../Buttons/Buttons";
import Inputs from "../Inputs/Inputs";
import Notes from "../Notes-Input/Notes";
import "./Transactions.css";

export default function Transactions() {
  return (
    <div className="transactions-container">
      <label>Amount</label>
      <Inputs type="number" placeholder="enter amount" />
      <label>Notes (Optional)</label>
      <Notes name="notes" rows="5" cols="50" placeholder="enter notes here" />
      <Buttons name="Confirm" />
    </div>
  );
}
