import React from "react";

export default function MoneyBalance() {
  return (
    <>
      <div className="labelName">
        <label>Balance</label>
      </div>
      <div className="inputs">
        <input type="number" autoComplete="off" />
      </div>
    </>
  );
}
