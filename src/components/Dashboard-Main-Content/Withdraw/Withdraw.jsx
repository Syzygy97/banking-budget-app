import React, { useState, useEffect } from "react";
import Buttons from "../../Buttons/Buttons";
import WithdrawHistory from "../../History/Withdraw History/WithdrawHistory";
import Inputs from "../../Inputs/Inputs";
import Transactions from "../../Transactions/Transactions";
import "./Withdraw.css";

export default function Withdraw({ setUserInfo }) {
  const LOCAL_SIGNED_IN_DATA = JSON.parse(localStorage.getItem("signedInData"));
  const LOCAL_ADMIN_DATA = JSON.parse(localStorage.getItem("userKey"));
  const [adminUserData, setAdminUserData] = useState(LOCAL_ADMIN_DATA);
  const [userData, setUserData] = useState(LOCAL_SIGNED_IN_DATA);
  const [toWithdraw, setToWithdraw] = useState("");
  const { balance } = userData;

  const handleChange = (e) => {
    setToWithdraw(e.target.value);
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

  const handleWithdrawSubmit = (e) => {
    e.preventDefault();
    if (toWithdraw === "") {
      const sameBalance = (0 + parseFloat(balance, 10)).toString();
      setUserData({ ...userData, balance: sameBalance });
      setUserInfo({ ...userData, balance: sameBalance });
    } else {
      const newBalance =
        parseFloat(balance, 10).toString() - parseFloat(toWithdraw, 10);
      setUserData({ ...userData, balance: newBalance });
      setUserInfo({ ...userData, balance: newBalance });
      setToWithdraw("");
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
    <div className="withdraw-container">
      <form onSubmit={handleWithdrawSubmit} className="withdraw-transactions">
        <h1 className="withdraw-description">
          Withdraw money from your account
        </h1>
        <label>Amount</label>
        <Inputs
          className="withdraw-input"
          type="number"
          min="0"
          step="0.01"
          name="balance"
          value={toWithdraw}
          onChange={handleChange}
        />
        <Transactions name="balance" />
        <Buttons name="Withdraw" className="withdraw-btn" />
      </form>
      <WithdrawHistory className="withdraw-history" />
    </div>
  );
}
