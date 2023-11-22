import axios from "axios";
import "./Chart.css";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { countDataByMonth } from "../../dummyData";
import { format, parse } from "date-fns";

export default function Chart({ title, dataKey, grid }) {
  const [backend, setBack] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3501/chartdata").then((response) => {
      setBack(response.data);
    });
  }, []);

  const countsByMonth = countDataByMonth(backend);
  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Initialize counts for all months, setting counts to 0 if not present in backend data
  const data = allMonths.map((month) => ({
    month,
    [dataKey]: countsByMonth[month] || 0,
  }));

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
