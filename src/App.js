// App.js
import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { useSelector } from "react-redux";
// import Routers from "./routers/Routers";

const App = () => {

  const token = useSelector((state)=>state.token);
  console.log(token)

  return <Layout />;
};

export default App;
