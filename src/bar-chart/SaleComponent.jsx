import React, { useState, useEffect } from 'react';
import APIService from './APIservice';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SaleComponent = () => {
  const [users, setUsers] = useState([]);
  const [custs, setCusts] = useState([]);
  const [sales, setSales] = useState([]);
  const [branchList,setBranchList] = useState([]);
  const [salesList,setSalesList] = useState([]);
  const [data, setData] = useState([
    {
      name: 'Branch 1',
      uv: 4000,
      Customers: 1000,
      amt: 2400,
    },
    {
      name: 'Branch 2',
      uv: 3000,
      Customers: 1398,
      amt: 2210,
    },
    {
      name: 'Branch 3',
      uv: 2000,
      Customers: 9800,
      amt: 2290,
    },
    {
      name: 'Branch 4',
      uv: 2780,
      Customers: 3908,
      amt: 2000,
    },
    {
      name: 'Branch 5',
      uv: 1890,
      Customers: 4800,
      amt: 2181,
    },
    {
      name: 'Branch 6',
      uv: 2390,
      Customers: 3800,
      amt: 2500,
    },
    {
      name: 'Branch 7',
      uv: 3490,
      Customers: 4300,
      amt: 2100,
    },
  ]);

  const navigateToAnotherPage = () => {
    // Navigate logic here
  };

  useEffect(() => {

    APIService.getUsers().then((Response) => {
      setUsers(Response.data);
    });
    APIService.getCust().then((Response) => {
      setCusts(Response.data);
    });
    APIService.getSale().then((Response) => {
      console.log('Sales data:', Response.data);
      setSales(Response.data);
      const updatedData = data.map((item, index) => {
        if (index < Response.data.length) {
          return {
            ...item,
            Customers: Response.data[index].sale, // Assigning 'sale' value to 'Customers'
          };
        }
        return item;
      });
      console.log('Updated data:', updatedData);
      setData(updatedData);
    });
  }, [data]);

  


  return (
    <div className="charts">
      <ResponsiveContainer width="40%" height={300}>
        <BarChart
          width={800}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Customers" fill="#90EE90" />
        </BarChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default SaleComponent;
