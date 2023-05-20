import React from "react";
import SagaingData from './SagaingData'
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
function Sagaing({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
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
                <img src={require('./Sagaing_map.png')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Sagaing.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Sagaing division</h4>
                <div className="Btext">Although "Sagaing" (capital of the division) is welknown for its 
            medication centers along the hills across Ayeyarwaddy river from Mandalay, much 
            of the division is still un-visited by foreign tourists. After Sagaing, Mongywa 
            on the bank of Chindwin river is the second most visited place. However the 
            trips upstream of Chindwin river to the hills in the north are still not popular
             due to the requirement of special permit, lack of decent hotels, etc.</div>
            </div>
           </div>
           <div className="Div">
                {SagaingData.length>0 && SagaingData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/division/sagaing/${place.name}`} className="DivL">
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
            <h4><FontAwesomeIcon icon={faBus} className="cbus"/> Highway Express Busline between Sagaing and other cites</h4>
            <ol>
                <li><span>E Lite</span> Monywa,Shwebo <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Kyal Zin Hein</span> Monywa,ShweBo,Kalay <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Lin Mandalar</span> Monywa <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Lumbini</span> Monywa <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>New Mandalar Htun</span>Sagaing,Monywa <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>New Sein Htay Hlaing</span> InDaw,BanMouk,ShweBo,Monywa,SaingPyin,Taze,SaDaung,KhinOo<FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Shwe Sin Kyal</span> Monywa,Sagaing,ShweBo <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Universal</span> Monywa <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Shwe Sin SetKyar</span> Monywa <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
            </ol>
           </div>
            <Hfooter/>
        </div>
    
    )
}export default Sagaing