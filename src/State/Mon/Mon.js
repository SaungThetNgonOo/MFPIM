import React from "react";
import MonData from './MonData'
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
function Mon({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
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
                <img src={require('./Mon_map.png')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Mon.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Mon State</h4>
                <div className="Btext">The capital "Mawlamyaing" is a sea port at the mouth of Thanlwin river. Travel around by car
                is possible. There are hotels in Mawlamyaing and Kyaikhtiyo pagoda mountain (famous golden rock pagoda)
                . Mawlamyaing is linked with Yangon by car road and railways.</div>
            </div>
           </div>
           <div className="Div">
                {MonData.length>0 && MonData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/state/mon/${place.name}`} className="DivL">
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
            <h4><FontAwesomeIcon icon={faBus} className="cbus"/> Highway Express Busline between Mon and other cites</h4>
            <ol>
                <li><span>Kyal Zin Hein</span> Mawlamyaing,Thanbyuzayat,MuDon,Ye <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
                <li><span>Universal</span> MawLaMying,ZinKyaik,Pong,Kawdun,MokeTaMa,
                                                MuDon,ThanbyuZayat,Ye,MoukKaNin,LaMaing,ASin <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
            </ol>
           </div>
           <Hfooter/>
        </div>
    
    )
}export default Mon