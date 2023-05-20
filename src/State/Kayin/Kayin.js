import React from "react";
import KayinData from './KayinData'
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Nav from "../../Navigation/Nav";
import Login from "../../Login/login";
import SignUp from "../../Login/SignUp";
import Hfooter from "../../Home/Hfooter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
function Kayin({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
    // const [data,setData]=useState([])

    // const Data=(one)=>{
    //     if(lag===false){
    //         one.map((languages)=>{
    //             setData(languages.English)
    //         })
    //     }
    //     if(lag===true){
    //         one.map((languages)=>{
    //             setData(languages.မြန်မာ)
    //         })
    //     }
    // }
    // useEffect(()=>{
    //     Data(AyeData)
    // },[data])
    // console.log(data)
    return(
    
        <div className="DivG">
           <Nav  log={log} login={login} setLogin={setLogin} User={User} setUser={setUser}/>
        
           <div className="Body">
                <img src={require('./Kayin_map.png')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Kayin.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Kayin State</h4>
                <div className="Btext">A mountainous area with many natural interesting spots. However traveling is difficult and much
                of it is still out of reach. Capital "Hpa An" can be reached by car. There is a beautiful place called 
                "Than Daung" which is being developed as a nature resort. Than Daung can be visited via Taungoo. Myawaddy
                town can be visited from Thailand's Mae Sot town through the border check point.</div>
            </div>
           </div>
           <div className="Div">
                {KayinData.length>0 && KayinData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/state/kayin/${place.name}`} className="DivL">
                        <div className="Div-div">
                            {<img src={place.image} alt={place.name} className="Div-img"/>}
                        <div className="Div-p">{place.paragraph.length>500? place.paragraph.slice(0,500)+"...":place.paragraph }</div>
                        </div>
                        </Link>
                    </div>
                )
            })}
           </div>
           <div className="cline">
            <h4><FontAwesomeIcon icon={faBus} className="cbus"/> Highway Express Busline between Kayin and other cites</h4>
            <ol>
                <li><span>Kyal Zin Hein</span> Myawaddy <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Lin Mandalar</span> Hpa-an,Myawaddy <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Shwe Sin Kyal</span> Myawaddy <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Universal</span> Myawaddy,KyoneDoe,Kokareik,Hpa-an <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
            </ol>
           </div>
           <Hfooter/>
        </div>
    
    )
}export default Kayin