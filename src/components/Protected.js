import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const logged = localStorage.getItem('loggedin');
    if (logged !== "true") {
      navigate('/login');
    }
    
  }, [navigate]);

  return (
    <div>
      {localStorage.getItem('loggedin') === "true" ? <Component /> : null}
    </div>
  );
}

export default Protected;
