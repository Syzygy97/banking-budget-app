import React from "react";
import "./DashboardHome.css";
import DepositHistory from "../../History/Deposit History/DepositHistory";
import WithdrawHistory from "../../History/Withdraw History/WithdrawHistory";
import { Chart } from "react-google-charts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DashboardHome() {
  const LOCAL_SIGNED_IN_DATA = JSON.parse(localStorage.getItem("signedInData"));
  const DEPOSIT_HISTORY = JSON.parse(localStorage.getItem("depositHistory"));
  console.log([DEPOSIT_HISTORY]);
  const WITHDRAW_HISTORY = JSON.parse(localStorage.getItem("withdrawHistory"));
  console.log([WITHDRAW_HISTORY]);
  const currentUserDeposit = DEPOSIT_HISTORY.filter((current) => {
    return current.user === LOCAL_SIGNED_IN_DATA.username;
  });
  const currentUserWithdraw = WITHDRAW_HISTORY.filter((current) => {
    return current.user === LOCAL_SIGNED_IN_DATA.username;
  });

  const slicedCurrentDepositData = currentUserDeposit.slice(-7);
  const depositData = [...slicedCurrentDepositData];

  const slicedCurrentWithdrawData = currentUserWithdraw.slice(-7);
  const withdrawData = [...slicedCurrentWithdrawData];

  return (
    <div className="dashboardHome">
      <div className="lineGraph">
        <h1 className="graph-title">Current Cash Flow Overview</h1>
        <figure>
          <h3>DEPOSIT HISTORY</h3>
          <ResponsiveContainer width="100%" height="42%">
            <AreaChart
              width={500}
              height={300}
              data={depositData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, "auto"]} />
              <Tooltip />
              {/* <Legend /> */}
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Area type="monotone" dataKey="balance" stroke="#82ca9d" />
            </AreaChart>
          </ResponsiveContainer>
          <h3>WITHDRAW HISTORY</h3>
          <ResponsiveContainer width="100%" height="42%">
            <AreaChart
              width={500}
              height={300}
              data={withdrawData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, "auto"]} />
              <Tooltip />
              {/* <Legend /> */}
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Area type="monotone" dataKey="balance" stroke="#82ca9d" />
            </AreaChart>
          </ResponsiveContainer>
        </figure>
      </div>
      <DepositHistory className="depositHistoryList" />
      <WithdrawHistory className="withdrawHistoryList" />
    </div>
  );
}
