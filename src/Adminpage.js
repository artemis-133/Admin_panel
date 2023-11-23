import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './Adminpage.module.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { setBranchIdSelectedByHeadAdmin } from "./components/BranchSlice/BranchSlice";
import Topbar from "./components/topbar/Topbar";
import AdminChart from "./components/AdminChart/AdminChart";
import AdminChart3 from "./components/AdminChart/AdminChart3";
import AdminChart2 from "./components/AdminChart/AdminChart2";

const AdminPage = () => {

  console.log("in admin component")
  
  const dispatch = useDispatch();
  const [branchList, setBranchList] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  // const [customers,setCustomers] = useState([]);
  // const [sales,setSales] = useState([]);
  // const [employees,setEmployees] = useState([]);


  let navigate = useNavigate();
  const token = useSelector((state) => state.branch.token);
  console.log(token)

  useEffect(() => {
    loadBranchList();
  }, []);

  const loadBranchList = () => {

    axios.interceptors.request.use(
      config=>{
        config.headers.authorization="Bearer "+token;
        return config;
      },
      error=>{
        return Promise.reject(error)
      }
    );

    axios.get("http://localhost:9000/getallbranch"
      ).then((response) => {
        setBranchList(response.data);
      })
      .catch((error) => {
        alert("Bad request");
      });
  };

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
    dispatch(setBranchIdSelectedByHeadAdmin(event.target.value));
    navigate("/layout");
  };



  const customers = [
    {
      name: 'HDFC1',
      Customers: 5,
    },
    {
      name: 'HDFC2',
      Customers: 5,
    },
    {
      name: 'HDFC3',
      Customers: 4,
    },
    {
      name: 'HDFC4',
      Customers: 5,
    },
    {
      name: 'HDFC5',
      Customers: 4,
    }
  ];

  const employee = [
    {
      name: 'HDFC1',
      Employees: 5,
    },
    {
      name: 'HDFC2',
      Employees: 5,
    },
    {
      name: 'HDFC3',
      Employees: 5,
    },
    {
      name: 'HDFC4',
      Employees: 5,
    },
    {
      name: 'HDFC5',
      Employees: 5,
    }
  ];

  const sales = [
    {
      name: 'HDFC1',
      Sales: 6,
    },
    {
      name: 'HDFC2',
      Sales: 4,
    },
    {
      name: 'HDFC3',
      Sales: 6,
    },
    {
      name: 'HDFC4',
      Sales: 6,
    },
    {
      name: 'HDFC5',
      Sales: 8,
    }
  ];


  return (
    <div className={styles.body}>
      <Topbar />
      <div >
      <div className={styles.main}>

      <h2>Select Branch:</h2>
      <select value={selectedValue} onChange={handleDropdownChange}>
        <option value="">Select</option>
        {branchList.map((branch) => {
          return <option value={branch.id}>{branch.name}</option>;
        })}
      </select>

      </div>
     
      <div className={styles.chart}>
      <AdminChart data={customers}/>
      <AdminChart3 data={employee}/>
      <AdminChart2 data={sales}/>
      </div>
      </div>
    </div>
  );
};

export default AdminPage;
