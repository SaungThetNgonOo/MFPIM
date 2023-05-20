import React from "react";
import KachinData from './KachinData'
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
function Kachin({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
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
                <img src={require('./Kachin_map.png')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Kachin.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Kachin State</h4>
                <div className="Btext">The northern most state has its capital in "Myitkyina" (mean near the big river). The Ayeyarwaddy
             is formed by two rivers (May Kha and Mali Kha) at a place 45 km north of capital. This is the home of the 
             country's highest peak "Khakaborazi"which is 5881 meters above sea level. Traveling to Myitkyina is by train
              and by flight. Train ride from Mandalay takes 30 hrs on the old railroad. It is possible to take a boat 
            ride from Bamaw down the Ayeyarwaddy river to Mandalay. This river trip takes 2 days and a night sleep 
            onboard the boat.</div>
            </div>
           </div>
           <div className="Div">
                {KachinData.length>0 && KachinData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/state/kachin/${place.name}`} className="DivL">
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
            <h4><FontAwesomeIcon icon={faBus} className="cbus"/> Highway Express Busline between Kachin and other cites</h4>
            <ol>
                <li><span>Kyal Zin Hein</span> MyitKyiNa <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Shwe Sin Kyal</span> Myitkyina <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Universal</span> MyitKyiNa,Moegaung,Moe Nyin,HoPin <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
            </ol>
           </div>
           <Hfooter/>
        </div>
    
    )
}export default Kachin