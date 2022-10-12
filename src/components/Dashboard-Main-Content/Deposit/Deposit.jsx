import React, { useState, useEffect } from "react";
import "./Deposit.css";
import DepositHistory from "../../History/Deposit History/DepositHistory";
import Transactions from "../../Transactions/Transactions";
import Buttons from "../../Buttons/Buttons";
import Inputs from "../../Inputs/Inputs";

const DEPOSIT_HISTORY_KEY = "depositHistory";

export default function Deposit({ setUserInfo }) {
  const LOCAL_SIGNED_IN_DATA = JSON.parse(localStorage.getItem("signedInData"));
  const LOCAL_ADMIN_DATA = JSON.parse(localStorage.getItem("userKey"));
  const [adminUserData, setAdminUserData] = useState(LOCAL_ADMIN_DATA);
  const [userData, setUserData] = useState(LOCAL_SIGNED_IN_DATA);
  const [toDeposit, setToDeposit] = useState("");
  const [depositHistory, setDepositHistory] = useState([]);
  const { balance } = userData;

  const handleChange = (e) => {
    setToDeposit(e.target.value);
  };
  const updateAdminUserData = () => {
    const currentUserLists = adminUserData.map((user) => {
      if (
        user.username.includes(userData.username) &&
        user.password.includes(userData.password)
      ) {
        return LOCAL_SIGNED_IN_DATA;
      } else {
        return user;
      }
    });
    setAdminUserData(currentUserLists);
  };

  useEffect(() => {
    localStorage.setItem("userKey", JSON.stringify(adminUserData));
  }, [adminUserData]);
  useEffect(() => {
    const deposit_history = JSON.parse(localStorage.getItem("depositHistory"));
    if (deposit_history) setDepositHistory(deposit_history);
  }, []);

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
      const now = new Date();
      const date = now.toDateString();
      const time = now.toLocaleTimeString();
      setUserData({ ...userData, balance: newBalance });
      setUserInfo({ ...userData, balance: newBalance });
      setToDeposit("");
      setDepositHistory((prevData) => {
        return [
          ...prevData,
          {
            user: userData.username,
            balance: toDeposit,
            date: date,
            time: time,
          },
        ];
      });
      localStorage.setItem(
        "signedInData",
        JSON.stringify({ ...userData, balance: newBalance })
      );
      localStorage.setItem(
        DEPOSIT_HISTORY_KEY,
        JSON.stringify([
          ...depositHistory,
          {
            user: userData.username,
            balance: toDeposit,
            date: date,
            time: time,
          },
        ])
      );
      alert("Deposit Successful!");
      // const newGraphData = {
      //   name: "2022-10-12",
      //   de: toDeposit,
      //   ex: 9800,
      //   amt: 2290,
      // };
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
