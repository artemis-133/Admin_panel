import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Topbar = () => {

  const role = useSelector((state)=>state.branch.role);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <Link to="/" className="link">
          <div className="topLeft">
            <span className="logo">
              {
                role==='admin'?"Head-Admin":"Branch-Admin"
              }
            </span>
          </div>
        </Link>
        <div className="topRight">
          <div className="topbarIconContainer">
            <i class="ri-notification-fill"></i>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <i class="ri-global-line"></i>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <i class="ri-settings-4-fill"></i>
          </div>
          <img
            src="https://i.pinimg.com/736x/a0/1b/77/a01b7746d59d485b10cc63e8ce7ec666.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
