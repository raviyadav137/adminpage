/*import React,{useState, useContext } from "react";
import {store} from '../components/Users'; 
import UserCard from "./UserCard";
import ProductCard from './ProductCard'

function Dashboard(){
    const [details] = useContext(store);
    const [status,setStatus]=useState(true)
 
   console.log(details);
    return(
        <>
        
        <div className="admin_box">
            <div className="admin_box1">
                <h1>Admin Page</h1>
            </div>
            <div className="admin_box2">
                <div className="admin_item1">
                    <h1>DASHBOARD</h1>
                     
                        <button onClick={()=>setStatus(true)}>User Details </button>
                        <button onClick={()=>setStatus(false)}>Product Details </button>
                     
                </div>
                <div className="admin_item2">
                    {status? <UserCard/> : <ProductCard/> }
                   </div>
            </div>
        </div>
        </>
    )
}
export default Dashboard;*/
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
          {/* Add more links for other functionalities */}
        </ul>
      </div>
      <div className="main-content">
        <h2>Welcome to the Dashboard</h2>
        <p>Here you can manage users and products.</p>
        {/* Add more content or components based on your requirements */}
      </div>
    </div>
  );
}

export default Dashboard;