import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { setBranchIdSelectedByHeadAdmin } from "../BranchSlice/BranchSlice";
import Topbar from "../topbar/Topbar";

const AdminPage = () => {
  console.log("in admin component")
  
  const dispatch = useDispatch();
  const [branchList, setBranchList] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
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
    navigate("/manager");
  };

  return (
    <div>
      <Topbar />
      <h2>Select Branch:</h2>
      <select value={selectedValue} onChange={handleDropdownChange}>
        <option value="">Select</option>
        {branchList.map((branch) => {
          return <option value={branch.id}>{branch.name}</option>;
        })}
      </select>

    </div>
  );
};

export default AdminPage;
