import React from "react";
import RakhineData from './RakhineData'
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
function Rakhine({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
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
                <img src={require('./Rakhine_map.png')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Rakhine.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Rakhine State</h4>
                <div className="Btext">There are flights to "Sittwe" (capital) and Thandwe (gateway to Ngapali sea beach) from 
            Yangon. Ngapali beach offers several good accommodations. Car roads to Ngapali and Sittwe are still
            in the bad shape, and foreigners are advised not to go overland. To get to Mrauk U ancient city,
            people need to continue waterway from Sittwe.</div>
            </div>
           </div>
           <div className="Div">
                {RakhineData.length>0 && RakhineData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/state/rakhine/${place.name}`} className="DivL">
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
            <h4><FontAwesomeIcon icon={faBus} className="cbus"/> Highway Express Busline between Rakhine and other cites</h4>
            <ol>
                <li><span>ATW(Anty Win)</span> Gwa,MaEie,SaNe,TaungGok,Thandwe,Ngapali,YanByae,KyaukPhyu <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Pearl Express</span> Gwa,Thandwe,Ngapali,MaEie,TaungGok,SaNe,YanByae <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Shwe Sin Kyal</span> Sittwe <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Tak Nay Lin</span> Gwa,Thandwe,Ngapali,TaungGok,MaEie,SaNe,YanByae,KyaukPhyu <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
            </ol>
           </div>
           <Hfooter/>
        </div>
    
    )
}export default Rakhine