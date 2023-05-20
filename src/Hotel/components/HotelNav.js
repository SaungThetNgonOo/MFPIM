import React,{useState} from "react";
import '../hotel.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Link, useNavigate,NavLink } from "react-router-dom";
import { useRef } from "react";
import {FaBars,FaTimes} from 'react-icons/fa'
import { AiOutlineUser } from "react-icons/ai";

function HotelNav({place,log,User,setUser,setLogin,login}){
    const navRef=useRef()
    const navigate=useNavigate()

    function handleLogin(){
        setLogin(!login)
        console.log(login)
    }
    function handleLogout(){
        setUser(null)
        navigate('/home')
    }
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive-nav")
    }

return(
    <div className="hotel1">
        <header>
        <span className="logo-text">MFPIM</span>
        <p className="Title">Famous Hotels in {place},Myanmar</p>
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
        <NavLink to="/feedback" className="nav-link">Feedback</NavLink>
        <NavLink to="/transport" className="nav-link">Transport</NavLink>
        {/* {!log?<dvi className="log-div">
            { User?  <div className="logBtn"><div className="uname">{User?.name.length>6? User.name.slice(0,6):User.name }</div>
                <button className='l-btn' onClick={handleLogout}>Logout</button>
                </div>:<div>
                        <AiOutlineUser className="navicon"/>
                    <button className='l-btn' onClick={handleLogin}>Login</button>
                    </div>}
            </dvi>:
            <div></div>} */}
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
            <div className="hotel111">
                <h3>Search hotels in {place},Myanmar</h3>
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stay</span>
                </div>
            </div>
  
    </div>
    )
}
export default HotelNav