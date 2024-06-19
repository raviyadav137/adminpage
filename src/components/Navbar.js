import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaLocationArrow, FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [status, setStatus] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const navbarRef = useRef(null); 

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedin") === "true";
    setLoggedIn(loggedInStatus);
    if (loggedInStatus) {
      const user = JSON.parse(localStorage.getItem('user')); 
      if (user && user.name) {
        setUsername(user.name);
      }
    }

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
    localStorage.removeItem('user'); 
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
