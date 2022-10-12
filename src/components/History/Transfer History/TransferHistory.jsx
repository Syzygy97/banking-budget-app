import React from "react";
import "./TransferHistory.css";

export default function TransferHistory() {
  const TRANSFER_HISTORY = JSON.parse(localStorage.getItem("transferHistory"));
  const LOCAL_SIGNED_IN_DATA = JSON.parse(localStorage.getItem("signedInData"));
  const currentUser = TRANSFER_HISTORY.filter((current) => {
    return current.user === LOCAL_SIGNED_IN_DATA.username;
  });
  return (
    <div className="transfer-history">
      <h1 className="history-transfer">Transfer History</h1>
      <div className="label-names">
        <label>AMOUNT</label>
        <label>RECEIVER</label>
        <label>DATE</label>
        <label>TIME</label>
      </div>
      <div className="transfer-history-list-container">
        <ul>
          {currentUser.map((list) => {
            return (
              <li key={list.time}>
                <div className="history-list">
                  <h2>₱ {list.balance}</h2>
                  <h2>{list.receiver}</h2>
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
