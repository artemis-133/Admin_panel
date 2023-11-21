import React from "react";
import Topbar from "../topbar/Topbar";
import Sidebarbranch from "../sidebar/sidebarbranch";
import Routers from "../../routers/Routers";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <div className="layout_conti">
        <div classname="sidebar">
          <Sidebarbranch />
        </div>
        <div className="maincontent">
          <Routers />
        </div>
      </div>
    </div>
  );
};
export default Layout;
