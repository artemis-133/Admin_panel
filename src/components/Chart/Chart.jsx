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

export default function Chart({ title, dataKey, grid }) {

const [backend,setBack] =useState([]);

useEffect(()=>{
  axios.get("http://localhost:3500/chartdata").then((response)=>{
    setBack(response.data);
  }); 
},[]);

//backend url to get starttime and endtime of service requests
    
console.log(backend);
const countsByMonth = countDataByMonth(backend);
const data = countsByMonth;
console.log(data);

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
