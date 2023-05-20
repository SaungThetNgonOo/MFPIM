import React from "react";
import YangonData from "./YangonData";
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
function Yagon({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}){
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
                <img src={require('./Yangon_map.png')} alt="" className="Bmap" />
            <div className="Body2">
                <img src={require('./Yanong.png')} alt="" className="Bimg"/>
                <h4 className="Btitle">Yangon division</h4>
                <div className="Btext">The former capital of the country and place of most of the 
            businesses' headquarters and government offices. This is also the main entry 
            gate to the country. Over 5 millions people (2001) live in this division. 
            Shwedagon pagoda on a hill in the city center is the most famous place.
            Yangon, formerly known as Rangoon, is the largest city in all of Myanmar. 
            There’s so much to see and do in this exciting and colorful metropolis – from 
            Buddhist monuments to scenic parks and lakes. Take a stroll through the streets,
             and you’ll discover so much history. Colonial buildings, museums, art 
             galleries, and markets adorn just about every corner of the city.
            Take your time soaking up the essence of Yangon at many of its religious sites. 
            Visiting Shwedagon Pagoda – a towering golden steeple – at sunset is a truly 
            awe-inspiring experience. Discover Buddha hairs at Botataung Pagoda, visit a 
            fresh local market and shop for souvenirs at Bogyoke Aung San Market.
            However you choose to spend your time in Yangon, you cannot leave without 
            indulging in the city’s mouth-watering Burmese street food! The samosa salad 
            and street pancakes are definitely something to write home about.
            The Shwedagon Pagoda is one of the Myanmar top tourist attractions. This giant 
            golden structure in Yangon rises to a height of 99 metres with its exterior 
            covered in around 60 tonnes of gold. If you look up at the top of the stupa, 
            you can see a 76-carat diamond as well as more than 7,000 smaller ones 
            throughout the complex. Inside Shwedagon, there are smaller pagodas and 
            pavilions dedicated to different Buddhist deities. Admission is MKK 8000 
            ($6 USD) and you should expect to spend up to three hours here. Be aware that 
            you need to remove your shoes and it may be advisable to bring a plastic bag to 
            carry your footwear.</div>
            </div>
           </div>
           <div className="Div">
                {YangonData.length>0 && YangonData.map(place=>{
                return(
                    <div  className="Division">
                        <div className="Div-name">{place.name}</div>
                        <Link to={`/division/yangon/${place.name}`} className="DivL">
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
            <h4><FontAwesomeIcon icon={faBus} className="cbus"/> Highway Express Busline between Yangon and other cites</h4>
            <ol>
                <li><span>ATW(Anty Win)</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                 Gwa,Thandwe, Ngapali,TaungGok, YanBya, KyaukPhyu, MaEie</li>
                <li><span>Aung Sit Khing</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                Mandalay,Meiktila </li>
                <li><span>Crown Express</span>  Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                 Lahio</li>
                <li><span>E Lite</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> 
                Mandalay,Meiktila, PyinOoLwin,NaungCho,Taunggyi, Hopong,ShweNyaung, Bagan,NyaungOo, Pakokku, Shwebo, NayPyiTaw,Tatkon</li>
                <li><span>Kyal Zin Hein</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> 
                Mandalay,Monywa, NayPyiTaw,PyinOoLwin, Myawaddy,Mawlamyaing, Thanbyuzayat,Ye, Mudon,Dawei, KawThaung,
                Myeik, LoiKaw, Lashio,Muse,MyaukPadaung,Myingyan,Magway,PoKokKu,MyitKyiNa, ShweBo,MoGok</li>
                <li><span>Lin Mandalar</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                Kalaw,AungPan, Taunggyi,KyaingTone, TachiLeik,Lahio, Muse,Hpa-an, Myawaddy,PyinOoLwin, Monywa,NayPyiTaw,
                 Dawei,Myeik,KawThaung,Bagan,NyaungOo, PakkoKu</li>
                <li><span>Lumbini</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                Monywa,Ywangan, Pindaya,Yatsauk, Kalaw,AungPan, Taunggyi</li>
                <li><span>New Mandalar Htun</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                 Mandalay,PyinOoLwin, Sagaing,Monywa, Taunggyi</li>
                <li><span>New Sein Htay Hlain</span>g Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                 Kamma,YaNaThar,Thayet,AHtet MinHla,InDaw, BanMouk,ShweBo,Monywa, SaingPyin,KhinOo,Zigon,
                Sintgaing,OwmTaw</li>
                <li><span>Pearl Express</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                Gwa,Thandwe,Ngapali, Sane,MaEie,TaungGok, YanByae,KyaukPhyu</li>
                <li><span>Phoe La Min</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                 Meiktila,Mandalay,Wundwin, KuMae, Kyauk Sal, HanMyinMo, Sintgaing,PaLate,Mandalay</li>
                <li><span>Shwe Sin Kyal</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                 Sittwe,Taunggyi, Mandalay,PyinOoLwin, Monywa,Sagaing, Lashio,LoiKaw, KyaingTone,TachiLeik, Muse,
                KyaukPadaung,Bagan, NyaungOo,Yenangyaung, Magway,ShweBo,MyitKyiNa, Dawei,Myeik,KawThaung,Myawaddy,
                Meikthila,KyaukSe</li>
                <li><span>Tak Nay Lin</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                Gwa,Thandwe, Ngapali,TaungGok, MaEie,SaNe, YanByae,KyaukPhyu</li>
                <li><span>Universal</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/> 
                MawLaMying,ZinKyaik, Pong,Kawdun,MokeTaMa, MuDon,ThanbyuZayat,Ye,LaMaing,MoukKaNin,ASin,KyoneDoe,
                Kokareik,Myawaddy,Hpa-an, Myeik,Dawei,Yebyu, KaleinAung, Palauk,Palaw,Taunggyi, Kalaw,ShweNyaung,AungPan,HeHoe,
                PyiNyaung,Lashio, NaungCho,Hsipaw, Kyaukme,MyitKyiNa, HoPin, Moegaung,Moe Nyin, Monywa,Pyin Oo Lwin,
                NayPyiTaw, PyawBwe, BawGaThiri, MyoMa,GangawWine, ThaPyaygone,YaMaeThin, TapKone</li>
                <li><span>Shwe Sin SetKyar</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                 Mandalay,PyinOoLwin, Taunggyi,Kalaw, NayPyiTaw, MaDaya,Meikthila,YaMaeThin,PyawBwe,Monywa</li>
                <li><span>Hinthar Nyi Naung</span> Yangon <FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                 Hinthada,Zalun, DanuPhyu,NyaungTone, Duyar,Sarmalout</li>
                <li><span>Mya tar Shin</span> Yangon<FontAwesomeIcon icon={faArrowAltCircleRight} className="cbus"/>
                 Hinthada,Zalun, DanuPhyu,NyaungTone, Duyar,Sarmalout</li>
            </ol>
           </div>
            <Hfooter/>
        </div>
    
    )
}export default Yagon