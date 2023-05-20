import React from "react";
import ShanData from './ShanData'
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
function Shan({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
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
                <img src={require('./Shan_map.png')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Shan.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Shan State</h4>
                <div className="Btext">A hill plateau of many different tribe people. Main tribe people are Shan people. One of
             the best tourist destination due to its all the year round good weather and beautiful scenery. Inle
             Lake is the most visited place. Traveling is by flight to Heho and by road to Inle Lake. Trekking 
             and home stay in tribe villages are possible around Kalaw, Pindaya and Inle lake areas. Capital 
             "Taunggyi" is also close to the lake. People of Shan state produce farm products such as paddy,
             various fruits and herbs. There are also handicrafts such as cloths, bags, baskets made by local 
             people.
            Mainly there are 3 permitted areas. The southern area containing Kalaw, Pindaya, Inle lake and 
            Taunggyi are reached by air and car. Northern area containing Hsi Paw, Lashio and to Muse (border
             town with China Ruili) can be reached by car from Mandalay and Matmyo. The eastern part (known 
            as golden triangle) bordering Laos and Thailand is reached by flight. Tourists can also enter 
            at Tachileik opposite Mae Sai of northern Thailand.</div>
            </div>
           </div>
           <div className="Div">
                {ShanData.length>0 && ShanData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/state/shan/${place.name}`} className="DivL">
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
            <h4><FontAwesomeIcon icon={faBus} className="cbus"/> Highway Express Busline between Shan and other cites</h4>
            <ol>
                <li><span>Crown Express</span> Lashio <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>E Lite</span> NaungCho,Taunggyi,Hopong,Shwe Nyaung <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>Yangon</li>
                <li><span>Kyal Zin Hein</span> Lashio,Muse <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Lin Mandalar</span> Kalaw,Taunggyi,AungPan,KyaingTone,Tachileik,Lashio,Muse <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Lumbini</span> Ywangan,Pindaya,Yatsauk,Kalaw,AungPan,Taunggyi <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>New Mandalar Htun</span> Taunggyi <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Shwe Sin Kyal</span> Taunggyi,Lashio,LoiKaw,KyaingTone,TachiLeik,Muse <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Universal</span> Taunggyi,Kalaw,ShweNyaung,AungPan,HeHoe,
                                            PyiNyaung,Lashio,NaungCho,Hsipaw,Kyaukme, <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Shwe Sin SetKyar</span> Taunggyi,Kalaw <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
            </ol>
           </div>
           <Hfooter/>
        </div>
    
    )
}export default Shan