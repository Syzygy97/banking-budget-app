import React, { useState, useEffect } from "react";
import "./WithdrawHistory.css";

export default function WithdrawHistory(props) {
  // const WITHDRAW_HISTORY = JSON.parse(localStorage.getItem("withdrawHistory"));
  const LOCAL_SIGNED_IN_DATA = JSON.parse(localStorage.getItem("signedInData"));
  const [localWithdraw, setLocalWithdraw] = useState([]);
  useEffect(() => {
    const WITHDRAW_HISTORY = JSON.parse(
      localStorage.getItem("withdrawHistory")
    );
    if (WITHDRAW_HISTORY) setLocalWithdraw(WITHDRAW_HISTORY);
  }, []);
  const currentUser = localWithdraw.filter((current) => {
    return current.user === LOCAL_SIGNED_IN_DATA.username;
  });
  return (
    <div className={props.className}>
      <h1 className="withdrawHistory">WITHDRAW History</h1>
      <div className="label-names">
        <label>AMOUNT</label>
        <label>DATE</label>
        <label>TIME</label>
      </div>
      <div className="withdraw-history-list-container">
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
