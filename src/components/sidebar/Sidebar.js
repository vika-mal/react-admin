import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">vikaadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <DashboardIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <DashboardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DashboardIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <DashboardIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <DashboardIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <DashboardIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <DashboardIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <DashboardIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color</div>
    </div>
  );
};

export default Sidebar;
