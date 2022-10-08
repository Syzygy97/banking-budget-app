import React, { useState, useEffect } from "react";
import "./Deposit.css";
import DepositHistory from "../../History/Deposit History/DepositHistory";
import Transactions from "../../Transactions/Transactions";
import Buttons from "../../Buttons/Buttons";
import Inputs from "../../Inputs/Inputs";

export default function Deposit({ setUserInfo }) {
  const LOCAL_SIGNED_IN_DATA = JSON.parse(localStorage.getItem("signedInData"));
  const [adminUserData, setAdminUserData] = useState([]);
  const [userData, setUserData] = useState(LOCAL_SIGNED_IN_DATA);
  const [toDeposit, setToDeposit] = useState("");
  const { balance } = userData;
  useEffect(() => {
    const LOCAL_ADMIN_DATA = JSON.parse(localStorage.getItem("userKey"));
    if (LOCAL_ADMIN_DATA) setAdminUserData(LOCAL_ADMIN_DATA);
  }, []);
  console.log("adminUserData", adminUserData);

  console.log("signed in username", LOCAL_SIGNED_IN_DATA.username);
  console.log("userData", userData);
  console.log("userData balance", balance);

  const handleChange = (e) => {
    setToDeposit(e.target.value);
  };

  const updateCurrentUserData = () => {};
  // const updateCurrentUserData = () => {
  //   const currentUser = adminUserData.find(
  //     (adminData) =>
  //       adminData.username === LOCAL_SIGNED_IN_DATA.username &&
  //       adminData.password === LOCAL_SIGNED_IN_DATA.password
  //   );
  //   if (currentUser) {
  //     console.log("success!!");
  //     // setAdminUserData(userData);
  //   } else {
  //     console.log("failed!!");
  //     return;
  //   }
  //   console.log("current user", currentUser);
  // };
  const handleDepositSubmit = (e) => {
    e.preventDefault();
    // updateCurrentUserData(adminUserData);
    if (toDeposit === "") {
      const newBalance = (0 + parseInt(balance, 10)).toString();
      setUserData({ ...userData, balance: newBalance });
      console.log("new balance", newBalance);
    } else {
      const newBalance = (
        parseFloat(toDeposit, 10) + parseFloat(balance, 10)
      ).toString();
      setUserData({ ...userData, balance: newBalance });
      setUserInfo({ ...userData, balance: newBalance });
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
