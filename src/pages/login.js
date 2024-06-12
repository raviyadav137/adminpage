import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react'
function Login(){
    const history=useNavigate();
    const [value,setValue]=useState({email:"",password:""})
    
    const changeHandle=(e)=>{
        setValue({...value,[e.target.name]:e.target.value})
        console.log(value)
    }
    const submitHandle=(e)=>{
        e.preventDefault();
       const loggeduser=JSON.parse(localStorage.getItem("user"));
       if(loggeduser.email===value.email && loggeduser.password===value.password){
        localStorage.setItem("loggedin",true);
        history('/');
       }else{
        alert("invalid admin");
       }
    }
    return(
        <>
        <div className='login_box'>
            <h1>Login Page</h1>
        </div>
        <form>
            <div className="formcontainer">
            <div className="inputfiled">
            <label>Enter Your Email:</label><br/><br/>
            <input type="email" name="email" className="inputbox" onChange={changeHandle}/>
           </div><br/>
           <div className="inputfiled">
            <label>Enter Your password:</label><br/><br/>
            <input type="password" name="password"className="inputbox" onChange={changeHandle}/>
           </div><br/>
             <div className="inputfield">
            <button className="formbtn" onClick={submitHandle} type="submit">Login</button>
             </div>
           <p>If not regitered  <Link to="/register" className="anchor" >Register here</Link></p>
           </div>
        </form>
        </>
    )
}
export default Login;