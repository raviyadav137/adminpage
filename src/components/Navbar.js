/*import React,{useState} from "react";
import { FaBars } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import {Link} from 'react-router-dom';
function Navbar(){
    const [status,setStatus]=useState(false)
    return(
        <>
        <div className="Admin_page"><h1>Product Management System</h1> </div>
        <div className="Navbar_items">
            <FaBars onClick={()=>setStatus(!status)} className="navbar_btn"/>
            {
                status ?
            <ul className="dropdown_bar">
                <li><FaLocationArrow />Dashboard</li>
                <Link to="/users"><li><FaLocationArrow />Users</li></Link>
                <Link to="/product"><li><FaLocationArrow />Products</li></Link>
            </ul>
            :
            ""
           }
          
        </div>
        <div></div>
        </>
    )
}
export default Navbar;*/
/*import React, { useState } from "react";
import { FaBars, FaLocationArrow, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggeduser'); // Replace 'loginData' with your actual key
    navigate('/login');
  };

  return (
    <>
      <div className="Admin_page">
        <h1>Product Management System</h1>
      </div>
      <div className="Navbar_items">
        <FaBars onClick={() => setStatus(!status)} className="navbar_btn" />
        {status ? (
          <ul className="dropdown_bar">
            <li>
              <FaLocationArrow className="icon" />
              <Link to="/dashboard" onClick={() => setStatus(false)}>Dashboard</Link>
            </li>
            <li>
              <FaLocationArrow className="icon" />
              <Link to="/users" onClick={() => setStatus(false)}>Users</Link>
            </li>
            <li>
              <FaLocationArrow className="icon" />
              <Link to="/product" onClick={() => setStatus(false)}>Products</Link>
            </li>
            <li>
              <FaUser className="icon" />
              <Link to="/profile" onClick={() => setStatus(false)}>Profile</Link>
            </li>
            <li>
              <FaSignOutAlt className="icon" />
              <button onClick={handleLogout} className="logout_button">Logout</button>
            </li>
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;*/
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaLocationArrow, FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [status, setStatus] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const navbarRef = useRef(null); // Reference to the navbar element

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedin") === "true";
    setLoggedIn(loggedInStatus);
    if (loggedInStatus) {
      const user = JSON.parse(localStorage.getItem('user')); // Assuming user data is stored as JSON
      if (user && user.name) {
        setUsername(user.name);
      }
    }

    // Event listener to close navbar when clicking outside
    const handleOutsideClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setStatus(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Replace 'user' with your actual key
    localStorage.setItem("loggedin", false);
    setStatus(false);
    setLoggedIn(false);
    navigate('/login');
  };

  const handleLogin = () => {
    setStatus(false)
    navigate('/login');
  };

  return (
    <>
      <div className="Admin_page">
        <h1>Product Management System</h1>
      </div>
      <div className="Navbar_items" ref={navbarRef}>
        <FaBars onClick={() => setStatus(!status)} className="navbar_btn" />
        {status ? (
          <ul className="dropdown_bar">
            <li>
              <FaLocationArrow className="icon" />
              <Link to="/" onClick={() => setStatus(false)}>Dashboard</Link>
            </li>
           
            {loggedIn ? (
              <>
                <li>
                  <FaUser className="icon" />
                  <span>{username}</span>
                </li>
                <li>
                  <FaSignOutAlt className="icon" />
                  <button onClick={handleLogout} className="logout_button">Logout</button>
                </li>
              </>
            ) : (
              <li>
                <FaSignInAlt className="icon" />
                <button onClick={handleLogin} className="logout_button">Login</button>
              </li>
            )}
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
