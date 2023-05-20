import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import ProtectedRoute from './protectedRoute'
import { useState } from 'react'
import './Login.css'
import '../Home/home.css'
import { FaTimes } from 'react-icons/fa'
const Login=({State,setState,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail})=>{
    
    // const [login,setLogin]=useState(false)
    const navigate=useNavigate()
    function loginClose(){
        setLogin(false)
        console.log(login)
    }
    function handleLogout(){
        setUser(null)
    }
    function SignUp(){
        setSignUp(true)
        setLogin(login=false)
        console.log(signUp)
    }

        const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(name,email)
        if(!name||!email) return <ProtectedRoute />;
        setUser({name:name,email:email})
        setLogin(login=false)
        navigate('/dashboard')
        // {User? console.log(User.name):console.log("Haven't User") }
    }
    
    // const google=()=>{
    //     window.open("http://localhost:5000/auth/google","_self")
    // }
    // const github=()=>{
    //     window.open("http://localhost:5000/auth/github","_self")
    // }
    // const facebook=()=>{
    //     window.open("http://localhost:5000/auth/facebook","_self")
    // }
    return(
        <div className='login-form'>
            <form className="form" >
                {User?<h5>Logout</h5>:<h5>Login</h5>}
                <div className="form-row">
                    <div className="from-row-1">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type='text'className='form-input' id='lname' value={name} onChange={(e)=>setName(e.target.value)} required/>
                    </div>
                    <div className="form-row-2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type='email'className='form-input' id='lemail' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    {User? <button type='submit' className="Login-btn" onClick={handleLogout}>Logout</button>:<button type='submit' className="Login-btn" onClick={handleSubmit}>Login</button>}
                    {/* <div className='left'>
                        <div className='loginButton facebook' onClick={facebook}>
                            <img src='https://img.icons8.com/color/512/facebook-new.png' alt=''className='icon' />
                        </div>
                        <div className='loginButton google' onClick={google}>
                            <img src='https://img.icons8.com/color/512/google-logo.png' alt=''className='icon' />
                        </div>
                        <div className='loginButton github' onClick={github}>
                            <img src='https://img.icons8.com/material-outlined/512/github.png' alt=''className='icon' />
                        </div>
                    </div> */}
                    <div>
                        <hr></hr><div className='or'>Or</div>
                    </div>
                    <div>Don't have an account? 
                        <div className='Sing-btn' onClick={SignUp}>Sign Up</div>
                    </div>
                </div>
                <button className='close-login' onClick={loginClose}><FaTimes /></button>
            </form>
        </div>
    )
}
export default Login
