import React, { useState , useEffect } from "react";
import { useNavigate,useParams,Link} from "react-router-dom";
import { useDispatch} from "react-redux";
import axios from "axios";
import { setAuthData, setBranchIdSelectedByHeadAdmin } from "../../components/BranchSlice/BranchSlice";
import "./LoginForm.css";
import Routers from '../../routers/Routers'

const LoginForm = () => {

  const params = useParams()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: username,
      password: password,
    };

      axios.post("http://localhost:8080/admin/authenticate", data)
      .then((response)=>{
        console.log(response.data)
        const token = response.data.Token;
        const branchid = response.data.BranchId;
        const role = response.data.Role;
  
        dispatch(setAuthData(response.data));
  
        if (role === "admin") {
          console.log("in admin")
          navigate("/admin"); // route to head-admin page
        } else if (role === "manager") {
          dispatch(setBranchIdSelectedByHeadAdmin(branchid));
          navigate("/manager"); // route to branch admin page
        } 
          setSuccess(true);
      })
      .catch ((error) =>{
          alert("Invalid Credentials")
          setUsername("");
          setPassword("");
          setSuccess(false);
      })

    
  };

  return (
      <>
        <div className="lcontainer">
          <div className="login-box">
            <h2>Admin-Login</h2>
            <form >
              <div className="input-group">
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button type="button" onClick={handleSubmit}>Login</button>
            </form>
          </div>
        </div>
        {/* <Routers /> */}
        </>
      )
};

export default LoginForm;