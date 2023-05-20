import React from "react";
import MagwayData from "./MagwayData";
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
function Magway({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
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
                <img src={require('./Magway_map.png')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Magway.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Magwe division</h4>
                <div className="Btext">It is a flat land for more than 50% with hills on the western side 
            (boradring Rakhins and Chin states). Again farming and forest products are the 
            main output. Ayeyarwaddy river flows through in the center. There are some of 
            the country's heavy industries along the river.</div>
            </div>
           </div>
           <div className="Div">
                {MagwayData.length>0 && MagwayData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/division/magway/${place.name}`} className="DivL">
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
            <h4><FontAwesomeIcon icon={faBus} className="cbus"/> Highway Express Busline between Magway and other cites</h4>
            <ol>
                <li><span>E Lite</span>  Pakokku <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Kyal Zin Hein</span> Magway,PakkoKu <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Lin Mandalar</span> PakkoKu <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>New Sein Htay Hlaing</span> KamMa,YaNaThar,Thayet,AHtet MinHla <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Shwe Sin Kyal</span> Yenangyaung,Magway <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
            </ol>
           </div>
            <Hfooter/>
        </div>
    
    )
}export default Magway