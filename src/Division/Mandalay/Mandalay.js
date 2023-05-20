import React from "react";
import ManData from './ManData'
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
function Mandalay({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
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
                <img src={require('./Mandalay_map.png')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Mandalay.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Mandalay division</h4>
                <div className="Btext">Mandalay is the country's second biggest city and a nothern hub of 
            the businesses. It is linked to Yangon by car road, train road and air. Bagan 
            (the 11th century Buddhist archaeological site - also the first Myanmar city) 
            is in this division. Boat ride between Mandalay and Bagan (Mandalay to Bagan is 
            popular and convenient) along Ayeyarwady river is one of the main attractions.
            Set at the foot of Mandalay Hill, Myanmar’s second-largest city is a charming 
            yet convoluted place. Formerly the old royal capital, it’s filled with bustling 
            markets, monasteries, Indian temples, mosques, and hillside pagodas that 
            rightfully place it as the center of Burmese culture.
            There’s a fair amount of ground to cover in Mandalay, but if you have time, you 
            should spend a few hours exploring the Royal Palace of Mandalay – it’s home to 
            40 different buildings! Climbing up Yankin Hill, seeing the world’s largest 
            book at Kuthodaw Pagoda, and watching a show at the Mandalay Marionettes are 
            also great ways to experience Mandalay.
            Other worthwhile Mandalay attractions include the Shwe In Bin Kyaung monastery, 
            Mahamuni Paya, and Ta Moke Shwe Gu Gyi – the country’s third most significant 
            archaeological site, after Mrauk-U and Bagan.</div>
            </div>
           </div>
           <div className="Div">
                {ManData.length>0 && ManData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/division/mandalay/${place.name}`} className="DivL">
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
            <h4><FontAwesomeIcon icon={faBus} className="cbus"/> Highway Express Busline between Mandalay and other cites</h4>
            <ol>
                <li><span>Aung Sit Khing </span> Mandalay,Meiktila <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>E Lite</span> Mandalay,Meiktila,PyinOoLwin,Bagan,
                    NyaungOo,NayPyiTaw,Tatkon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Kyal Zin Hein</span> Mandalay,NayPyiTaw,PyinOoLwin,Myingyan,
                    KyaukPadaung,MoGok <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Lin Mandalar</span> PyinOoLwin,NayPyiTaw,Bagan,NyaungOo <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>New Mandalar Htun</span> Mandalay,PyinOoLwin <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>New Sein Htay Hlaing</span> Sintgaing,OwmTaw <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Phoe La Min</span> Mandalay,Wundwin,MeiktilaKuMae,
                    KyaukSe, HanMyinMo,Sintgaing,PaLat <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Shwe Sin Kyal</span> Mandalay,PyinOoLwin,KyaukPadaung,
                    Bagan,NyaungOo,Meikthila,KyaukSe, <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Universal</span> Mandalay,Meikthila,NarYiSin,ThaeDaw,LayTap,ThaPyayWa,
                    SetMhuZone,KyaukSe,WanDwin,KuMae,PaLate,Sintgaing,Pyin Oo Lwin
                    ,NayPyiTaw,BawGaThiri,MyoMa,GangawWine,ThaPyaygone,YaMaeThin,
                    TapKone,PyawBwe <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Shwe Sin SaKyar</span> Mandalay,PyinOoLwin,NayPyiTaw,MaDaya,
                    Meikthila,YaMaeThin,PyawBwe <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
            </ol>
           </div>
            <Hfooter/>
        </div>
    
    )
}export default Mandalay