import React from "react";
import ThaData from './ThaData'
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Nav from "../../Navigation/Nav";
import '../Div.css'
import Login from "../../Login/login";
import SignUp from "../../Login/SignUp";
import FooterA from "../FooterA";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
function Thaninthayi({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
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
                <img src={require('./Tanintharyi_map.png')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Tanintharyi.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Thaninthayi division</h4>
                <div className="Btext">It is the southernmost part of the country with lot of islands 
            (Myeik archipelago) in Andaman sea. On the eastern border with Thailand the 
            Thaninthani mountain range runs north to south. Capital "Dawei" can be reached 
            by train and car. Car roads are still in bad condition. The main mode of travel 
            to Dawei, Myeik and Kaw Thaung (southern most town bordering with Thailand - 
                border passing check point) is by flight. Passenger cruise boats are 
                available, but not reliable since there seems to be no specific time 
                table.</div>
            </div>
           </div>
           <div className="Div">
                {ThaData.length>0 && ThaData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/division/thaninthayi/${place.name}`} className="DivL">
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
            <h4><FontAwesomeIcon icon={faBus} className="cbus"/> Highway Express Busline between Thaninthayi and other cites</h4>
            <ol>
                <li><span>Kyal Zin Hein</span> Dawei,Myeik,KawThaung <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Lin Mandalar</span> Dawei,Myeik,KawThaung <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Shwe Sin Kyal</span> Dawei,Myeik,KawThaung <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Universal</span> Dawei,KaleinAung,Yebyu,PaLauk,Palaw,Myeik<FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
            </ol>
           </div>
            <FooterA User={User}/>
        </div>
    
    )
}export default Thaninthayi