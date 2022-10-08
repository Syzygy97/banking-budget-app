import React, { useState, useEffect } from "react";
import "./Deposit.css";
import DepositHistory from "../../History/Deposit History/DepositHistory";
import Transactions from "../../Transactions/Transactions";
import Buttons from "../../Buttons/Buttons";
import Inputs from "../../Inputs/Inputs";

export default function Deposit() {
  const LOCAL_USER_DATA = JSON.parse(localStorage.getItem("signedInData"));
  const [userData, setUserData] = useState(LOCAL_USER_DATA);
  const [toDeposit, setToDeposit] = useState("");
  const { balance } = userData;
  console.log("userData", userData);
  console.log("userData balance", balance);

  const handleChange = (e) => {
    setToDeposit(e.target.value);
  };
  const handleDepositSubmit = (e) => {
    // e.preventDefault();
    if (toDeposit === "") {
      const newBalance = (0 + parseInt(balance, 10)).toString();
      setUserData({ ...userData, balance: newBalance });
      console.log("new balance", newBalance);
    } else {
      const newBalance = (
        parseInt(toDeposit, 10) + parseInt(balance, 10)
      ).toString();
      setUserData({ ...userData, balance: newBalance });
      localStorage.setItem(
        "signedInData",
        JSON.stringify({ ...userData, balance: newBalance })
      );
      console.log("new balance", newBalance);
    }
    console.log("new money", userData);
  };
  return (
    <>
      <form onSubmit={handleDepositSubmit} className="deposit-transactions">
        <h1>Add money to your account</h1>
        <label>Amount</label>
        <Inputs
          type="number"
          name="balance"
          value={toDeposit}
          onChange={handleChange}
        />
        <Transactions name="balance" />
        <Buttons name="Deposit" />
      </form>
      <DepositHistory className="deposit-history" />
    </>
  );
}
