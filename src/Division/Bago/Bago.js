import React from "react";
import BagoData from './BagoData'
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Nav from "../../Navigation/Nav";
import '../Div.css'
import Login from "../../Login/login";
import SignUp from "../../Login/SignUp";
import Hfooter from "../../Home/Hfooter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
function Bago({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
    
    return(
    
        <div className="DivG">
           <Nav  log={log} login={login} setLogin={setLogin} User={User} setUser={setUser}/>
           <div className="Body">
                <img src={require('./Bago_map.png')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Bago.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Bago division</h4>
                <div className="Btext">The capital "Bago" is formerly the capital of Mon people. Farming 
            and extracting forest products are major businesses. Nature trips to the Bago 
            mountain range, where there are elephant camps and tribe villages, are possible. 
            Taungoo is the starting point for such nature trips to Bago range (on its west) 
            and to Than Daung (on its west) in Kayin state.
            Bago, also known as Pegu, was once the capital of the Mon Kingdom. While it 
            doesn’t top many modern guidebooks already published, this city is packed full 
            of history and authentic everyday culture. See the ruins of the ancient palace, 
            admire the many nearby pagodas, or witness the traditions of the rice-making 
            industry. As a new airport is set to open in the region in 2022, you should go 
            now before the city is overrun by tourists!
            The appeal of Bago is its authentic, non-touristy feel. There are only a select 
            few hotels licensed to welcome foreigners, and the restaurants offer a truly 
            local experience with traditional curries and typical Burmese dishes.
            The local market is also a great spot to soak up the sights and sounds of 
            everyday life in Bago. Other attractions you don’t want to miss include 
            Shwethalyaung, an enormous reclining statue of Buddha, and Shwemawdaw Pagoda, 
            the ‘Golden God Temple.’
            Bago, formerly known as Hanthawaddy of Mon Kingdom in the 15th century is 
            located around 80 km from Yangon. The city has several places of cultural 
            importance such as the Shwemawdaw Pagoda, the huge reclining Buddha Image 
            called Shwe Tha Lyaung, the four giant Buddha images of Kyaikpin Pagoda and 
            the Kanbawzathadi palace.</div>
            </div>
           </div>
           <div className="Div">
                {BagoData.length>0 && BagoData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/division/bago/${place.name}`} className="DivL">
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
            <h4><FontAwesomeIcon icon={faBus} className="cbus"/> Highway Express Busline Bago and other cites</h4>
            <ol>
                <li><span>New Mandalar Htun</span> Zigon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>Yangon</li>
            </ol>
           </div>
            <Hfooter/>
        </div>
    
    )
}export default Bago