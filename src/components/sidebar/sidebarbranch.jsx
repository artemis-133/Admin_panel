import "./sidebarbranch.css";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <span className="sidebarIcon">
                  <i class="ri-align-justify"></i>
                </span>
                Home
              </li>
            </Link>
            <Link to="/branchalytics" className="link">
              <li className="sidebarListItem">
                <span className="sidebarIcon">
                  <i class="ri-building-line"></i>
                </span>
                Branchalytics
              </li>
            </Link>
            <Link to="/service_requests" className="link">
              <li className="sidebarListItem">
                <span className="sidebarIcon">
                  <i class="ri-file-chart-line"></i>
                </span>
                Service Requests
              </li>
            </Link>
            <Link to="/feedback" className="link">
              <li className="sidebarListItem">
                <span className="sidebarIcon">
                  <i class="ri-feedback-fill"></i>
                </span>
                Feedback
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
