import React from "react";
import "./DashboardPage.css";
import DashboardHome from "../../components/Dashboard-Main-Content/DashboardHome";
import SideBar from "../../components/SideBar/SideBar";
import UserOverview from "../../components/UserOverview/UserOverview";

export default function DashboardPage() {
  return (
    <div className="dashboardPage">
      <SideBar />
      <DashboardHome />
      <UserOverview />
    </div>
  );
}
