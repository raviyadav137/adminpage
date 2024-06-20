import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="/users">Manage Users</Link>
          </li>
          <li>
            <Link to="/product">Manage Products</Link>
          </li>
         
        </ul>
      </div>
      <div className="main-content">
        <h2>Welcome to the Dashboard</h2>
        
              </div>
    </div>
  );
}

export default Dashboard;