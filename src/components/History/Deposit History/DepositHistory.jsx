import React, { useState, useEffect } from "react";
import "./DepositHistory.css";

export default function DepositHistory(props) {
  // const DEPOSIT_HISTORY_ADMIN = JSON.parse(
  //   localStorage.getItem("depositHistory")
  // );
  const LOCAL_SIGNED_IN_DATA = JSON.parse(localStorage.getItem("signedInData"));
  const [localDeposit, setLocalDeposit] = useState([]);
  useEffect(() => {
    const DEPOSIT_HISTORY = JSON.parse(localStorage.getItem("depositHistory"));
    if (DEPOSIT_HISTORY) setLocalDeposit(DEPOSIT_HISTORY);
  }, []);
  const currentUser = localDeposit.filter((current) => {
    return current.user === LOCAL_SIGNED_IN_DATA.username;
  });
  return (
    <div className={props.className}>
      <h1 className="depositHistory">Deposit History</h1>
      <div className="label-names">
        <label>AMOUNT</label>
        <label>DATE</label>
        <label>TIME</label>
      </div>
      <div className="deposit-history-list-container">
        <ul>
          {currentUser.map((list) => {
            return (
              <li key={list.time}>
                <div className="history-list">
                  <h2>₱ {list.balance}</h2>
                  <h2>{list.date}</h2>
                  <h2>{list.time}</h2>
                </div>
              </li>
            );
          })}
        </ul>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
