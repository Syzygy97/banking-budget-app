import React from "react";
import Inputs from "../Inputs/Inputs";
import Notes from "../Notes-Input/Notes";
import "./Transactions.css";

export default function Transactions({ name }) {
  return (
    <div className="transactions-container">
      <label>Notes (Optional)</label>
      <Notes name="notes" rows="5" cols="50" placeholder="enter notes here" />
    </div>
  );
}
