// Routers.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Branchalytics from "../pages/Branchalytics/Branchalytics";
import Feedback from "../pages/Feedback/Feedback";
import Service_requests from "../pages/Service_requests/Service_requests";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/branchalytics" element={<Branchalytics />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/service_requests" element={<Service_requests />} />
      <Route path="/*" element={<Navigate to="/home" replace={true} />} />
    </Routes>
  );
};

export default Routers;
