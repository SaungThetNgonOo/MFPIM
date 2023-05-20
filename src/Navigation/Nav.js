import React, { useState } from "react";
import { Form, NavLink,useNavigate} from "react-router-dom";
import {FaBars,FaTimes} from 'react-icons/fa'
import {useRef} from 'react'
import { Link } from "react-router-dom";
import './Nav.css'
import { AiOutlineUser } from "react-icons/ai";
function Nav({lag,setLag,log,login,setLogin,User,setUser}){
    const navRef=useRef()
    const navigate=useNavigate()
    const [data,setData]=useState([])
    function logout(){
        window.open("http://localhost:5000/auth/logout","_self");
        
    }

    function handleLogin(){
        setLogin(!login)
        console.log(login)
    }
    function handleLogout(){
        setUser(null)
        navigate('/home')
    }

    function ChangeLag(){
        setLag(!lag)
    }
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive-nav")
    }
    
    return(
       <header>
        {/* <img src={require('./MFPIM.png')} alt="" className="logo-text"/> */}
        <span className="logo-text">MFPIM</span>
        {/* <p className="Title">Most Famous Places In Myanmar</p> */}
        <nav ref={navRef}>
        <NavLink to="/home" className="nav-link first-link">Home</NavLink>
        <div className="dropdown">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
            State
            </button>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/state/mon">Mon</Link></li>
                <li><Link className="dropdown-item" to="/state/kayin">Kayin</Link></li>
                <li><Link className="dropdown-item" to="/state/rakhine">Rakhine</Link></li>
                <li><Link className="dropdown-item" to="/state/kayah">Kayah</Link></li>
                <li><Link className="dropdown-item" to="/state/shan">Shan</Link></li>
                <li><Link className="dropdown-item" to="/state/chin">Chin</Link></li>
                <li><Link className="dropdown-item" to="/state/kachin">Kachin</Link></li>
            </ul>
        </div>
        <div className="dropdown">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                Division
            </button>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/division/thaninthayi">Thaninthayi</Link></li>
                <li><Link className="dropdown-item" to="/division/yangon">Yangon</Link></li>
                <li><Link className="dropdown-item" to="/division/ayeyarwaddy">Ayeyarwaddy</Link></li>
                <li><Link className="dropdown-item" to="/division/magway">Magwe</Link></li>
                <li><Link className="dropdown-item" to="/division/mandalay">Mandalay</Link></li>
                <li><Link className="dropdown-item" to="/division/sagaing">Saging</Link></li>
                <li><Link className="dropdown-item" to="/division/bago">Bago</Link></li>
            </ul>
        </div>
        <NavLink to="/hotel" className="nav-link">Hotels</NavLink>
        <NavLink to="/transport" className="nav-link">Transport</NavLink>
        <NavLink to="/feedback" className="nav-link">Feedback</NavLink>
        {/* {!log?<button className='l-btn' onClick={handleLogin}>Login</button>:<div></div>} */}
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
        </button>
        {/* <div className={lag?"gray-div":"brown-div"} onClick={ChangeLag}>
            <div className={lag?"brown-circle":"gray-circle"}></div>
        </div> */}
       </header>
    )
}
export default Nav