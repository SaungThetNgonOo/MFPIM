import React,{useState} from "react";
import './home.css'
import Nav from "../Navigation/Nav";
import State from "./State";
import stateData from "./stateData";
import { useEffect } from "react";
import Show from "./Show";
import homeData from "./homeData";
import { FaTimes } from "react-icons/fa";
import { useRef } from "react";
import Log from "./Log";
import { Link } from "react-router-dom";
import QuesAns from "../Q&A/Q&A";
import Login from "../Login/login";
import SignUp from "../Login/SignUp";
import Hfooter from "./Hfooter";
import divisionData from "./divisionData";


function Home({state,setState,lag,setLag,division,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
    // const [home,setHome]=useState([])

    // const Home=(one)=>{
    //     if(lag===false){
    //         one.map((languages)=>{
    //             setHome(languages.English)
    //         })
    //     }
    //     if(lag===true){
    //         one.map((languages)=>{
    //             setHome(languages.မြန်မာ)
    //         })
    //     }
    // }
    // useEffect(()=>{
    //     Home(homeData)
    // },[Home])
    // console.log(home)
    console.log(User)
    return(
    <div className="home">
        <Nav lag={lag}setLag={setLag} log={log} login={login} setLogin={setLogin} User={User} setUser={setUser} />
        <div className="home-index">
        <div className="bgphoto">
            <h5>Most Famous Place In Myanmar</h5> 
        </div>
        <div className="home-body">

        { homeData.map((h)=>{
            return(
            <div className="home-divs">
                <h2 className="home-header">Myanmar</h2>
                <div className="home1">
                    <img src={h.img1} alt={h.T1}  className="img1"/>
                    <p className="p1">{h.p1}</p>
                </div>
                <div className="home-div1">
                    <div className="home-div2">
                        <div className="home2">
                            <h2 className="homeh2">{h.T2}</h2>
                            <img src={h.img2} alt={h.T2} className="img2"/>
                            <p className="p2">{h.p2}</p>
                        </div>
                        <div className="home3">
                            <h2 className="homeh2">{h.T3}</h2>
                            <img src={h.img3} alt={h.T3} className="img3"/>
                            <p className="p3">{h.p3}</p>
                        </div>
                    </div>
                    <QuesAns  className="faq"/>
                </div>
            </div>
        )
    }
)}
    </div>
    
</div>
{divisionData.map((s)=>{
    return(<div className="division">
        <Show  division={division} key={s.name} {...s} lag={lag} User={User} setUser={setUser}/>
    </div>)
})}
<State lag={lag} User={User} setUser={setUser}/>

<Hfooter />
</div>

    )
}
export default Home