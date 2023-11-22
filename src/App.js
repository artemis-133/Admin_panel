// App.js
import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import LoginForm from "./pages/Login/LoginForm";
// import Routers from "./routers/Routers";
import AdminPage from './components/HeadAdminHomePage/AdminPage'
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Branchalytics from "./pages/Branchalytics/Branchalytics";
import Feedback from "./pages/Feedback/Feedback";
import Service_requests from "./pages/Service_requests/Service_requests";
import BranchAdmin from "./components/BranchAdmin/BranchAdmin";

const App = () => {
  return(
    <>
    <AdminPage />
    </>
  ) 
};

export default App;
