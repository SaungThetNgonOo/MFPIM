import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import stateData from "./stateData";
import './home.css'
import StateList from "./StateList";
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation,Pagination,Autoplay,A11y } from "swiper";
import "swiper/css"
import "swiper/css/navigation"


const State=()=>{
    
    return(
        <Swiper
            style={{overflow:"hidden",color:"white",textAlign:"center"}}
            loop={true}
            autoplay={{
                delay:3000,
                disableOnInteraction:false,
                pauseOnMouseEnter:true
            }}
            breakpoints={{
            360: {
            width: 375,
            slidesPerView: 1,
            },
            // when window width is >= 768px
            680: {
            width: 680,
            height: 200,
            slidesPerView: 1,
            },
            850: {
            width: 850,
            slidesPerView: 2,
            },
            1100: {
            width: 1100,
            slidesPerView: 4,
            },
            1300: {
            width: 1300,
            slidesPerView: 4,
            },
        }}
        
        modules={[Navigation,Pagination,A11y,Autoplay]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
        pagination={{
            type:"progressbar"
        }}
        
        // onSwiper={(swiper)=>console.log(swiper)}
        // onSlideChange={()=>console.log("slide changed")}
        >
            <div className="randomVideoPage swiper-container">
                <div className="randomVideoContainer swiper-wrapper">
                    <div className="states">
                { stateData.map((loc)=>{
                    return(
                        <SwiperSlide className="swiper-slide">
                                <StateList key={loc.name} {...loc} />
                        </SwiperSlide>
                    )
                }
        )}
        </div>
                </div>
            </div>
        </Swiper>
        
    )
}
export default State