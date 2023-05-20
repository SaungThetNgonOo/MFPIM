import React from "react";
import ChinData from "./ChinData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Nav from "../../Navigation/Nav";
import Login from "../../Login/login";
import SignUp from "../../Login/SignUp";
import FooterA from "../FooterA";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
function Chin({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
    
    return(
    
        <div className="DivG">
           <Nav  log={log} login={login} setLogin={setLogin} User={User} setUser={setUser}/>
           <div className="Body">
                <img src={require('./Map_of_Chin_State.png')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Chin.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Chin State</h4>
                <div className="Btext">This steeply mountainous state is home to the ethnic Chin people. Travel to there is only by 
        car on the difficult mountain roads. So far the popular tourist destination is Mt. Victoria (Nat Ma 
        mountain). The 3110 meters peak can be reached by rough road from Pakokku (in Magwe division). The
        final part is on foot. Normally Mt. Victoria trip is started in Bagan where there are good hotels.
        Largest towns where there are guesthouses, are Hakha (capital), Falan, Teddin (in the north). However
         traveling there needs special permit.</div>
            </div>
           </div>
           <div className="Div">
                {ChinData.length>0 && ChinData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/state/chin/${place.name}`} className="DivL">
                        <div className="Div-div">
                            {<img src={place.image} alt={place.name} className="Div-img"/>}
                        <div className="Div-p">{place.paragraph.length>500? place.paragraph.slice(0,500)+"...":place.paragraph }</div>
                        </div>
                        </Link>
                    </div>
                )
            })}
           </div>
            <FooterA User={User}/>
        </div>
    
    )
}export default Chin