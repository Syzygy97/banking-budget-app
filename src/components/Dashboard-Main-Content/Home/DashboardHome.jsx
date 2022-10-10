import React, { PureComponent } from "react";
import "./DashboardHome.css";
import DepositHistory from "../../History/Deposit History/DepositHistory";
import WithdrawHistory from "../../History/Withdraw History/WithdrawHistory";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DashboardHome({ userInfo }) {
  const data = [
    {
      name: "2022-10-10",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2022-10-11",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "2022-10-12",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "2022-10-13",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "2022-10-14",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "2022-10-15",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "2022-10-16",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="dashboardHome">
      <div className="lineGraph">
        <h1>$ {userInfo.balance}</h1>
        <h3>Current Balance</h3>
        <figure>
          <div style={{ width: "100%" }}>
            <h4>Deposit History</h4>

            <ResponsiveContainer width="100%" height={180}>
              <LineChart
                width={500}
                height={200}
                data={data}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </LineChart>
            </ResponsiveContainer>
            <h4>Withdraw History</h4>

            <ResponsiveContainer width="100%" height={180}>
              <LineChart
                width={500}
                height={200}
                data={data}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
                name="NASAN NA"
              />
            </LineChart>
          </ResponsiveContainer> */}
        </figure>
      </div>
      <DepositHistory className="depositHistoryList" />
      <WithdrawHistory className="withdrawHistoryList" />
    </div>
  );
}
