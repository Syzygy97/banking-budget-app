import React, { useState, useEffect } from "react";
import "./Transfer.css";
import Transactions from "../../Transactions/Transactions";
import TransferHistory from "../../History/Transfer History/TransferHistory";
import Inputs from "../../Inputs/Inputs";
import Buttons from "../../Buttons/Buttons";

const TRANSFER_HISTORY_KEY = "transferHistory";

export default function Transfer({ setUserInfo }) {
  const LOCAL_SIGNED_IN_DATA = JSON.parse(localStorage.getItem("signedInData"));
  const LOCAL_ADMIN_DATA = JSON.parse(localStorage.getItem("userKey"));
  const [adminUserData, setAdminUserData] = useState(LOCAL_ADMIN_DATA);
  const [sender, setSender] = useState(LOCAL_SIGNED_IN_DATA);
  const [receiverUsername, setReceiverUsername] = useState("");
  const [receiverAccount, setReceiverAccount] = useState([]);
  const [toTransfer, setToTransfer] = useState("");
  const [transferHistory, setTransferHistory] = useState([]);

  const handleChange = (e) => {
    setToTransfer(e.target.value);
  };
  const handleReceiverName = (e) => {
    setReceiverUsername(e.target.value);
  };
  const updateCurrentUserBalance = () => {
    const userLists = adminUserData.map((user) => {
      if (user.username === receiverUsername) {
        return receiverAccount;
      } else if (user.username === sender.username) {
        return sender;
      } else {
        return user;
      }
    });
    setAdminUserData(userLists);
  };
  useEffect(() => {
    localStorage.setItem("userKey", JSON.stringify(adminUserData));
  }, [adminUserData]);
  useEffect(() => {
    updateCurrentUserBalance();
  }, [sender]);
  useEffect(() => {
    const transfer_history = JSON.parse(
      localStorage.getItem("transferHistory")
    );
    if (transfer_history) setTransferHistory(transfer_history);
  }, []);
  const userListUsernames = adminUserData.map((user) => {
    return user.username;
  });

  const getReceiverAccount = () => {
    const receiverUserAccount = adminUserData.find((user) => {
      return user.username === receiverUsername;
    });
    setReceiverAccount(receiverUserAccount);
  };

  useEffect(() => {
    getReceiverAccount();
  }, [receiverUsername]);

  const handleTransfer = (e) => {
    e.preventDefault();
    if (toTransfer === "" || receiverUsername === sender.username) {
      alert("You can't send money to yourself!");
      return;
    } else if (!userListUsernames.includes(receiverUsername)) {
      alert("Account does not exist!");
      return;
    } else if (toTransfer > sender.balance) {
      alert("Insufficient balance");
      return;
    } else {
      const newSenderBalance = parseFloat(sender.balance - toTransfer, 10);
      const newReceiverBalance =
        parseFloat(toTransfer, 10) + parseFloat(receiverAccount.balance);
      const now = new Date();
      const date = now.toDateString();
      const time = now.toLocaleTimeString();
      setSender({ ...sender, balance: newSenderBalance });
      setUserInfo({ ...sender, balance: newSenderBalance });
      setReceiverAccount({ ...receiverAccount, balance: newReceiverBalance });
      localStorage.setItem(
        "signedInData",
        JSON.stringify({ ...sender, balance: newSenderBalance })
      );
      setToTransfer("");
      setTransferHistory((prevData) => {
        return [
          ...prevData,
          {
            user: sender.username,
            receiver: receiverUsername,
            balance: parseFloat(toTransfer),
            date: date,
            time: time,
          },
        ];
      });
      localStorage.setItem(
        TRANSFER_HISTORY_KEY,
        JSON.stringify([
          ...transferHistory,
          {
            user: sender.username,
            receiver: receiverUsername,
            balance: parseFloat(toTransfer),
            date: date,
            time: time,
          },
        ])
      );
      alert("Transfer Successful!");
    }
  };

  return (
    <div className="transfer-container">
      <form onSubmit={handleTransfer} className="transfer-transactions">
        <h1 className="transfer-description">Send money to other account</h1>
        <div className="transfer-inputs">
          <div className="transfer-amount">
            <label>Amount</label>
            <Inputs
              className="transfer-input"
              type="number"
              min="0"
              step="0.01"
              name="balance"
              value={toTransfer}
              onChange={handleChange}
              required
            />
          </div>
          <div className="receiver-name">
            <label>Account username</label>
            <Inputs
              className="receiver-name-input"
              type="text"
              value={receiverUsername}
              onChange={handleReceiverName}
              required
            />
          </div>
        </div>
        <Transactions name="balance" />
        <Buttons type="submit" name="Transfer" className="transfer-btn" />
      </form>
      <TransferHistory className="transfer-history" />
    </div>
  );
}
