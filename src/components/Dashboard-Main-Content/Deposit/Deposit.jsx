import React, { useState, useEffect } from "react";
import "./Deposit.css";
import DepositHistory from "../../History/Deposit History/DepositHistory";
import Transactions from "../../Transactions/Transactions";
import Buttons from "../../Buttons/Buttons";
import Inputs from "../../Inputs/Inputs";

export default function Deposit({ setUserInfo }) {
  const LOCAL_SIGNED_IN_DATA = JSON.parse(localStorage.getItem("signedInData"));
  const LOCAL_ADMIN_DATA = JSON.parse(localStorage.getItem("userKey"));
  const [adminUserData, setAdminUserData] = useState(LOCAL_ADMIN_DATA);
  const [userData, setUserData] = useState(LOCAL_SIGNED_IN_DATA);
  const [toDeposit, setToDeposit] = useState("");
  const { balance } = userData;

  const handleChange = (e) => {
    setToDeposit(e.target.value);
  };
  const updateAdminUserData = () => {
    const currentUser = adminUserData.map((user) => {
      if (
        user.username.includes(userData.username) &&
        user.password.includes(userData.password)
      ) {
        return LOCAL_SIGNED_IN_DATA;
      } else {
        return user;
      }
    });
    setAdminUserData(currentUser);
  };

  useEffect(() => {
    localStorage.setItem("userKey", JSON.stringify(adminUserData));
  }, [adminUserData]);

  const handleDepositSubmit = (e) => {
    e.preventDefault();
    if (toDeposit === "") {
      const sameBalance = (0 + parseFloat(balance, 10)).toString();
      setUserData({ ...userData, balance: sameBalance });
      setUserInfo({ ...userData, balance: sameBalance });
    } else {
      const newBalance = (
        parseFloat(toDeposit, 10) + parseFloat(balance, 10)
      ).toString();
      setUserData({ ...userData, balance: newBalance });
      setUserInfo({ ...userData, balance: newBalance });
      setToDeposit("");
      localStorage.setItem(
        "signedInData",
        JSON.stringify({ ...userData, balance: newBalance })
      );
    }
  };
  useEffect(() => {
    updateAdminUserData();
  }, [userData]);

  return (
    <div className="deposit-container">
      <form onSubmit={handleDepositSubmit} className="deposit-transactions">
        <h1 className="deposit-description">Add money to your account</h1>
        <label>Amount</label>
        <Inputs
          className="deposit-input"
          type="number"
          min="0"
          step="0.01"
          name="balance"
          value={toDeposit}
          onChange={handleChange}
        />
        <Transactions name="balance" />
        <Buttons type="submit" name="Deposit" className="deposit-btn" />
      </form>
      <DepositHistory className="deposit-history" />
    </div>
  );
}
