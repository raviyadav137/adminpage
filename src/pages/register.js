import React,{useState} from "react"
import {Link,useNavigate} from 'react-router-dom';

function Register(){
    const history=useNavigate();
  
    const [data,setData]=useState({name:"",email:"",password:"",Repassword:""})
    const  changeHandle=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandle= async (e)=>{
        e.preventDefault();
        const {name,email,password,Repassword}=data;
        if(name&&email&&password&&Repassword){
          if(password===Repassword){
                alert("user registered")
                localStorage.setItem("user",JSON.stringify(data));
                
                history('/login');
               
            }else{
                alert("password and confirmpassword not equal")
            }
          }
      }
    return(
        <>
     
   
         <form>
            <div className="formcontainer">
           <div className="inputfiled">
            <label>Enter Your full Name:</label><br/><br/>
            <input type="text" name="name" value={data.name} className="inputbox" onChange={changeHandle}/>
           </div><br/>
           <div className="inputfiled">
            <label>Enter Your Email:</label><br/><br/>
            <input type="email" name="email" value={data.email} className="inputbox" onChange={changeHandle}/>
           </div><br/>
           <div className="inputfiled">
            <label>Enter Your password:</label><br/><br/>
            <input type="password" name="password" value={data.password} className="inputbox" onChange={changeHandle}/>
           </div><br/>
           <div className="inputfiled">
            <label>ReEnter your password:</label><br/><br/>
            <input type="password" name="Repassword" value={data.Repassword} className="inputbox" onChange={changeHandle}/>
           </div><br/>
           <div className="inputfield">
            <button className="formbtn" type="submit" onClick={submitHandle}>Register</button>
             </div>
           <p>If Already registered <Link to="/login" className="anchor">login here</Link></p>
           </div>
        </form>
        </>
    )
}

export default Register;