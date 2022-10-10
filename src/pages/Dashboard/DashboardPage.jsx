import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./DashboardPage.css";
import SideBar from "../../components/SideBar/SideBar";
import UserOverview from "../../components/UserOverview/UserOverview";
import Expense from "../../components/Dashboard-Main-Content/Expense/Expense";
import DashboardHome from "../../components/Dashboard-Main-Content/Home/DashboardHome";
import Deposit from "../../components/Dashboard-Main-Content/Deposit/Deposit";
import Withdraw from "../../components/Dashboard-Main-Content/Withdraw/Withdraw";
import Profile from "../../components/Dashboard-Main-Content/Profile/Profile";
import Transfer from "../../components/Dashboard-Main-Content/Transfer/Transfer";

export default function DashboardPage() {
  const LOCAL_DATA = JSON.parse(localStorage.getItem("signedInData"));
  const [userInfo, setUserInfo] = useState(LOCAL_DATA);
  return (
    <div className="dashboardPage">
      <SideBar />
      <main>
        <Routes>
          <Route>
            <Route
              path="home"
              element={<DashboardHome userInfo={userInfo} />}
            />
            <Route path="expenses" element={<Expense />} />
            <Route
              path="deposit"
              element={<Deposit setUserInfo={setUserInfo} />}
            />
            <Route
              path="withdraw"
              element={<Withdraw setUserInfo={setUserInfo} />}
            />
            <Route path="transfer" element={<Transfer />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </main>
      <UserOverview userInfo={userInfo} />
    </div>
  );
}
