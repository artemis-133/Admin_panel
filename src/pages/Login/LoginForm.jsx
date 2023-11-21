import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import "./LoginForm.css";

const LoginForm = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post("backend-url/authenticate", data); //call authenticator to get token
      const token = response.data.token;
      const branchid = response.data.branchid;
      const role = response.data.role;

      if (role === "admin") {
        navigate("/admin"); // route to head-admin page
      } else if (role === "manager") {
        navigate(`/manager/${branchid}`); // route to branch admin page
      } 
        setSuccess(true);


    } catch (error) {
      console.error("Authentication failed:", error.message);
      setSuccess(false);
    }

    setUsername("");
    setPassword("");
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <div className="lcontainer">
          <div className="login-box">
            <h2>Admin-Login</h2>
            <form onSubmit={handleSubmit}>
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
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;