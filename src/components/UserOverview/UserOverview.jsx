import React, { useEffect, useState } from "react";
import "./UserOverview.css";

export default function UserOverview() {
  const [userProfile, setUserProfile] = useState([]);
  useEffect(() => {
    const LOCAL_SIGNED_IN_DATA = JSON.parse(
      localStorage.getItem("signedInData")
    );
    if (LOCAL_SIGNED_IN_DATA) setUserProfile(LOCAL_SIGNED_IN_DATA);
  }, []);
  const { username, balance } = userProfile;
  return (
    <div className="userOverview">
      <h1 className="userName">Hello, {username}</h1>
      <h3>Current balance</h3>
      <h1>{balance}</h1>
    </div>
  );
}
