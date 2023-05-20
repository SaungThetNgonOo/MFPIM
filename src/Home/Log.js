import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import './home.css'
import Login from "../Login/login";
function Log({User,CloseLog,login,setLog,setLogin,setUser}){
    const navigate=useNavigate()
    function Login(){
        setLogin(true)
        setLog(false)
        // console.log(login)
    }
    function Logout(){
        setLogin(false)
        // console.log(login)
    }
    return(
        <div className="true-div">
            <button className="close-btn" onClick={CloseLog}><FaTimes/></button>
                            <i class="fa-solid fa-user"></i>
                            <p className="login-div">You can Login (or) Sign-up to your acc</p>
                            {User?<button className="login-btn" onClick={Logout}>Logout</button>:<button className="login-btn" onClick={Login}>Login</button>}
        </div>
        
    )
}
export default Log