import React from "react";
import AyeData from "./AyeData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Nav from "../../Navigation/Nav";
import '../Div.css'
import Login from "../../Login/login";
import SignUp from "../../Login/SignUp";
import Hfooter from "../../Home/Hfooter";
import { useLocation } from "react-router-dom";
import FooterA from "../FooterA";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
function Ayeyarwaddy({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
    const Location="Ayeyarwaddy Division"
    
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
                <img src={require('./map-myanmar-ayeyarwady.webp')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Ayeyarwady.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Ayeyarwaddy division</h4>
                <div className="Btext">This is a wide land where Ayeyarwaddy river spilts into many river 
            streams and drains into the sea. It is the major rice producing area of the 
            country. The capital "Pathein" is 4 hrs drive away from Yangon. There are a 
            couple of fine sand sea beaches on the west (south of Rakhine state).</div>
            </div>
           </div>
           <div className="Div">
                {AyeData.length>0 && AyeData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/division/ayeyarwaddy/${place.name}`} className="DivL">
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
            <h4><FontAwesomeIcon icon={faBus} className="cbus"/> Highway Express Busline Ayeyarwaddy and other cites</h4>
            <ol>
                <li><span>Hinthar NyiNaung</span> Hinthada,Zalun,DanuPhyu,NyaungTone
                    ,Duyar,Sarmalout <FontAwesomeIcon icon={faBus} className="cbus"/> Yangon</li>
                <li><span>Myata Shin</span> Hinthada,Zalun,DanuPhyu,NyaungTone,
                    Duyar,Sarmalout <FontAwesomeIcon icon={faBus} className="cbus"/> Yangon</li>
            </ol>
           </div>
            <Hfooter/>
        </div>
    
    )
}export default Ayeyarwaddy