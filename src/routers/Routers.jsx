// Routers.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Branchalytics from "../pages/Branchalytics/Branchalytics";
import Feedback from "../pages/Feedback/Feedback";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/branchalytics" element={<Branchalytics />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/*" element={<Navigate to="/home" replace={true} />} />
    </Routes>
  );
};

export default Routers;
