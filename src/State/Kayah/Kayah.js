import React from "react";
import KayahData from './KayahData'
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
function Kayah({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
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
                <img src={require('./Kayah_map.png')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Kayah.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Kayah State</h4>
                <div className="Btext">`It is very beautiful mountainous state bordering Thailand's Mae Hong Son province on the east. 
            Due to the lack of good transport roads and security reason, it is still out of the permitted places for 
            foreign tourists. The capital is "Loikaw" located close to one of the country's main hydroelectric power 
            plants, "Lawpita".</div>
            </div>
           </div>
           <div className="Div">
                {KayahData.length>0 && KayahData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/state/kachin/${place.name}`} className="DivL">
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
            <h4><FontAwesomeIcon icon={faBus} className="cbus"/> Highway Express Busline between Kayah and other cites</h4>
            <ol>
                <li><span>Kyal Zin Hein</span> LoiKaw, <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> Yangon</li>
            </ol>
           </div>
           <FooterA User={User}/>
        </div>
    
    )
}export default Kayah