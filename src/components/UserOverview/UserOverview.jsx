import React, { useEffect, useState } from "react";
import "./UserOverview.css";

export default function UserOverview({ userInfo }) {
  // const [userProfile, setUserProfile] = useState([]);
  // useEffect(() => {
  //   const LOCAL_SIGNED_IN_DATA = JSON.parse(
  //     localStorage.getItem("signedInData")
  //   );
  //   if (LOCAL_SIGNED_IN_DATA) setUserProfile(userInfo);
  // }, []);
  // // useEffect(() => {
  // //   setUserProfile()
  // // }, [userInfo]);
  // // const { username, balance } = userProfile;
  // console.log("userInfo", userInfo);
  // // console.log("userProfile", userProfile);
  return (
    <div className="userOverview">
      <h1 className="userName">Hello, {userInfo.username}</h1>
      <h3>Current balance</h3>
      <h1>{userInfo.balance}</h1>
    </div>
  );
}
