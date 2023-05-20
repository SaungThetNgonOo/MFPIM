import React, { useState } from "react";
import { useEffect } from "react";
import RakhineData from "./RakhineData";
import { useParams } from "react-router-dom";
import Nav from "../../Navigation/Nav";
import SignUp from "../../Login/SignUp";
import Login from "../../Login/login";
import FooterA from "../FooterA"
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation,Pagination,Autoplay,A11y } from "swiper";
import "swiper/css"
import "swiper/css/navigation"
import RakImgdata from "./RakImgdata";
function RakhineDetail({lag,log,setLog,login,setLogin,User,setUser,signUp,setSignUp,name,setName,email,setEmail}) {
  const { placeName } = useParams();
  console.log(placeName);
  const [Img,setImg]=useState(0)
function handleClick(i){
    setImg(i)
  }
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
  const Place = RakhineData.find((place) => place.name === placeName);
  console.log(Place);
  return (
    <div className="DivG">
      <Nav log={log}login={login}setLogin={setLogin}User={User}setUser={setUser}/>
      
      <div className="Div">
        <div className="Div-name">{Place.name}</div>
        <div className="Div-div">
          <img src={Place.img1[Img]} alt="Place.name" className="Div-img" />
          <div className="Div-p">{Place.paragraph}</div>
        </div>
        <Swiper
            style={{overflow:"hidden",color:"white",textAlign:"center",transition:"0ms"}}
            loop={true}
            autoplay={{
                delay:1000,
                disableOnInteraction:false,
                pauseOnMouseEnter:true
            }}
            breakpoints={{
            360: {
            width: 375,
            slidesPerView: 2,
            },
            // when window width is >= 768px
            680: {
            width: 680,
            height: 200,
            slidesPerView: 2,
            },
            850: {
            width: 850,
            slidesPerView: 2,
            },
            1100: {
            width: 1100,
            slidesPerView: 5,
            },
            1300: {
            width: 1300,
            slidesPerView: 5,
            },
        }}
        className="DetailSwiper"
        modules={[Navigation,Pagination,A11y,Autoplay]}
        width='auto'
        spaceBetween={0}
        slidesPerView={5}
        centeredSlides='true'
        simulateTouch='true'
        loopFillGroupWithBlank='false'
        grabCursor='true'
        observer='true'
        slidesOffsetAfter={0}
        navigation
        pagination={{
            type:"progressbar"
          
          }}
        
        // onSwiper={(swiper)=>console.log(swiper)}
        // onSlideChange={()=>console.log("slide changed")}
        >
            <div className="randomVideoPage swiper-container">
          <div className="randomVideoContainer swiper-wrapper">
          {RakImgdata.map(img=>{
          if(img.name===placeName){
            console.log("same")
            console.log(img.name)
            return(
            <div className="Div-imgg">
              {img.img1.map((photo,i)=>(
              <SwiperSlide className="SwiperSlide">
                  <img src={img.img1[i]} alt="img.name" className="Div-img1" onClick={()=>handleClick(i)}/>
              </SwiperSlide>
           ))}
            </div>
            )
          }
          })}
            </div>
            </div>
        </Swiper>
      </div>
      <FooterA User={User}/>
    </div>
  );
}
export default RakhineDetail