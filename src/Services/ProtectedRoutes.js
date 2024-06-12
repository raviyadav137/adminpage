import React from "react";
import {Outlet,Navigate} from 'react-router-dom';
const ProtectedRoutes=()=>{
    return(
        <>
        
     const auth=localStorage.getItem("loggedin");
     return auth ? <Outlet/> :<Navigate to={"/login"}/>
        
        </>
    )
}
export default ProtectedRoutes;