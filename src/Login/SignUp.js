import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import ProtectedRoute from './protectedRoute'
import { useState } from 'react'
import './Login.css'
import '../Home/home.css'
import { FaTimes } from 'react-icons/fa'
function SignUp({login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){

    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    function SignClose(){
        // navigate('/home')
        setLogin(false)
        setSignUp(false)
    }
    const handleSignIn=async(e)=>{
        e.preventDefault()
        console.log(name,email,password)
        if(!name||!email||!password) return <ProtectedRoute />;
        setUser({name:name,email:email,password:password})
        setLogin(login=false)
        setSignUp(signUp=false)
        navigate('/dashboard')
    }
    function handleSignOut(){
        navigate('/home')
    }
    function Blogin(){
        setSignUp(signUp=false)
        setLogin(login=true)
    }
    return(
        
            <div className='login-form'>
            <form className="form">
                {User?<h5>SignOut</h5>:<h5>SignIn</h5>}
                <div className="form-row">
                    <div className="from-row-1">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type='text'className='form-input' id='name' value={name} onChange={(e)=>setName(e.target.value)} required/>
                    </div>
                    <div className="form-row-2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type='email'className='form-input' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <div className="form-row-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type='password'className='form-input' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>
                    {User? <button type='submit' className="Login-btn" onClick={handleSignOut}>Sigin Out</button>:<button type='submit' className="Login-btn" onClick={handleSignIn}>Sign Up</button>}
                    <div>
                        <hr></hr><div className='or'>Or</div>
                    </div>
                    <div>Already have an account 
                        <div className='Blogin' onClick={Blogin}>Login</div>
                    </div>
                </div>
                <button className='close-login cl' onClick={SignClose}><FaTimes /></button>
            </form>
        </div>
        
        
    )
}
export default SignUp