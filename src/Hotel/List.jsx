import React, { useState,useEffect,Link } from 'react'
import './List.css'
import HotelNav from './components/HotelNav'
import { useLocation, useParams } from 'react-router-dom'
import Ayehotels from './HotelsDb/Aye/Ayehotels'
import BagoHotel from './HotelsDb/Bgo/BagoHotel'
import MagwayHotel from './HotelsDb/Magway/MagwayHotel'
import ManHotels from './HotelsDb/Mandalay/ManHotels'
import SagaingHotels from './HotelsDb/Sagaing/SagaingHotels'
import ThaHotel from './HotelsDb/Thaninthayi/ThaHotel'
import YanHotels from './HotelsDb/Yangon/YanHotels'
import ChinHotel from './HotelsDb/Chin/ChinHotel'
import KachinHotel from './HotelsDb/Kachin/KachinHotel'
import KayahHotel from './HotelsDb/Kayah/KayahHotel'
import KayinHotel from './HotelsDb/Kayin/KayinHotel'
import MonHotel from './HotelsDb/Mon/MonHotel'
import RakhineHotel from './HotelsDb/Rakhine/RakhineHotel'
import ShanHotel from './HotelsDb/Shan/ShanHotel'
import Login from '../Login/login'
import SignUp from '../Login/SignUp'
import './hotel.css'
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom'
import HotelHeader from './components/HotelHeader'
import { AiOutlineUser } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import MailList from './components/MailList'
import Footer from './components/Footer'

export const List = ({log,User,setUser,setLogin,login,signUp,setSignUp}) => {
    const {Location}=useParams()
    console.log(Location)
    const [data,setData]=useState([])
    const navigate=useNavigate()

  if(Location==="Ayeyarwaddy Division"){
      const Place=Ayehotels.map(place=>place)
      console.log(Place)
      console.log(User)
      return (
      <div>
          <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
          <HotelHeader/>
        <div className='hotelList'>
          {Place.map(loc=>{
        return(
        <div className='searchItem'>
        <img src={loc.img} alt='' className='siImg'/>
        <div className='siIncludes'>
          <h1 className="sTitle">{loc.hotelName}</h1>
          <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
          <span className="siText">
            {loc.text}
          </span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>{loc.grade}</span>
            <div>{loc.rate}</div>
          </div>
          <div className='siDetailTexts'>
            <span className='siPrice'>{loc.MMK}</span>
            <span className='siPriceNight'>{loc.pernight}</span>
            <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
          </div>
        </div>
      </div>
          )
      })}
        </div>
        <MailList />
        <Footer/>
    </div>
    )
  }else if(Location==="Bago Division"){
      const Place=BagoHotel.map(place=>place)
      console.log(Place)
      return (
    <div>
        <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
        <HotelHeader/>
      <div className='hotelList'>
        {Place.map(loc=>{
      return(
      <div className='searchItem'>
      <img src={loc.img} alt='' className='siImg'/>
      <div className='siIncludes'>
        <h1 className="sTitle">{loc.hotelName}</h1>
        <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
        <span className="siText">
          {loc.text}
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{loc.grade}</span>
          <div>{loc.rate}</div>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>{loc.MMK}</span>
          <span className='siPriceNight'>{loc.pernight}</span>
          <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
        </div>
      </div>
    </div>
        )
    })}
      </div>
      <MailList />
        <Footer/>
    </div>
  )
    }else if(Location==="Magway Division"){
      const Place=MagwayHotel.map(place=>place)
      console.log(Place)
      return (
    <div>
        <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
        <HotelHeader/>
      <div className='hotelList'>
        {Place.map(loc=>{
      return(
      <div className='searchItem'>
      <img src={loc.img} alt='' className='siImg'/>
      <div className='siIncludes'>
        <h1 className="sTitle">{loc.hotelName}</h1>
        <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
        <span className="siText">
          {loc.text}
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{loc.grade}</span>
          <div>{loc.rate}</div>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>{loc.MMK}</span>
          <span className='siPriceNight'>{loc.pernight}</span>
          <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
        </div>
      </div>
    </div>
        )
    })}
      </div>
      <MailList />
        <Footer/>
    </div>
  )
    }else if(Location==="Mandalay Division"){
      const Place=ManHotels.map(place=>place)
      console.log(Place)
      return (
    <div>
        <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
        <HotelHeader/>
      <div className='hotelList'>
        {Place.map(loc=>{
      return(
      <div className='searchItem'>
      <img src={loc.img} alt='' className='siImg'/>
      <div className='siIncludes'>
        <h1 className="sTitle">{loc.hotelName}</h1>
        <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
        <span className="siText">
          {loc.text}
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{loc.grade}</span>
          <div>{loc.rate}</div>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>{loc.MMK}</span>
          <span className='siPriceNight'>{loc.pernight}</span>
          <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
        </div>
      </div>
    </div>
        )
    })}
      </div>
      <MailList />
        <Footer/>
    </div>
  )
    }else if(Location==="Sagaing Division"){
      const Place=SagaingHotels.map(place=>place)
      console.log(Place)
      return (
    <div>
        <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
        <HotelHeader/>
      <div className='hotelList'>
        {Place.map(loc=>{
      return(
      <div className='searchItem'>
      <img src={loc.img} alt='' className='siImg'/>
      <div className='siIncludes'>
        <h1 className="sTitle">{loc.hotelName}</h1>
        <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
        <span className="siText">
          {loc.text}
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{loc.grade}</span>
          <div>{loc.rate}</div>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>{loc.MMK}</span>
          <span className='siPriceNight'>{loc.pernight}</span>
          <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
        </div>
      </div>
    </div>
        )
    })}
      </div>
      <MailList />
        <Footer/>
    </div>
  )
    }else if(Location==="Thaninthayi Division"){
      const Place=ThaHotel.map(place=>place)
      console.log(Place)
      return (
    <div>
        <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
        <HotelHeader/>
      <div className='hotelList'>
        {Place.map(loc=>{
      return(
      <div className='searchItem'>
      <img src={loc.img} alt='' className='siImg'/>
      <div className='siIncludes'>
        <h1 className="sTitle">{loc.hotelName}</h1>
        <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
        <span className="siText">
          {loc.text}
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{loc.grade}</span>
          <div>{loc.rate}</div>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>{loc.MMK}</span>
          <span className='siPriceNight'>{loc.pernight}</span>
          <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
        </div>
      </div>
    </div>
        )
    })}
      </div>
      <MailList />
        <Footer/>
    </div>
  )
    }else if(Location==="Yangon Division"){
      const Place=YanHotels.map(place=>place)
      console.log(Place)
      return (
    <div>
        <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
        <HotelHeader/>
      <div className='hotelList'>
        {Place.map(loc=>{
      return(
      <div className='searchItem'>
      <img src={loc.img} alt='' className='siImg'/>
      <div className='siIncludes'>
        <h1 className="sTitle">{loc.hotelName}</h1>
        <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
        <span className="siText">
          {loc.text}
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{loc.grade}</span>
          <div>{loc.rate}</div>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>{loc.MMK}</span>
          <span className='siPriceNight'>{loc.pernight}</span>
          <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
        </div>
      </div>
    </div>
        )
    })}
      </div>
      <MailList />
        <Footer/>
    </div>
  )
    }else if(Location==="Chin State"){
      const Place=ChinHotel.map(place=>place)
      console.log(Place)
      return (
    <div>
        <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
        <HotelHeader/>
      <div className='hotelList'>
        {Place.map(loc=>{
      return(
      <div className='searchItem'>
      <img src={loc.img} alt='' className='siImg'/>
      <div className='siIncludes'>
        <h1 className="sTitle">{loc.hotelName}</h1>
        <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
        <span className="siText">
          {loc.text}
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{loc.grade}</span>
          <div>{loc.rate}</div>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>{loc.MMK}</span>
          <span className='siPriceNight'>{loc.pernight}</span>
          <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
        </div>
      </div>
    </div>
        )
    })}
      </div>
      <MailList />
        <Footer/>
    </div>
  )
    }else if(Location==="Kachin State"){
      const Place=KachinHotel.map(place=>place)
      console.log(Place)
      return (
    <div>
        <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
        <HotelHeader/>
      <div className='hotelList'>
        {Place.map(loc=>{
      return(
      <div className='searchItem'>
      <img src={loc.img} alt='' className='siImg'/>
      <div className='siIncludes'>
        <h1 className="sTitle">{loc.hotelName}</h1>
        <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
        <span className="siText">
          {loc.text}
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{loc.grade}</span>
          <div>{loc.rate}</div>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>{loc.MMK}</span>
          <span className='siPriceNight'>{loc.pernight}</span>
          <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
        </div>
      </div>
    </div>
        )
    })}
      </div>
      <MailList />
        <Footer/>
    </div>
  )
    }else if(Location==="Kayah State"){
      const Place=KayahHotel.map(place=>place)
      console.log(Place)
      return (
    <div>
        <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
        <HotelHeader/>
      <div className='hotelList'>
        {Place.map(loc=>{
      return(
      <div className='searchItem'>
      <img src={loc.img} alt='' className='siImg'/>
      <div className='siIncludes'>
        <h1 className="sTitle">{loc.hotelName}</h1>
        <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
        <span className="siText">
          {loc.text}
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{loc.grade}</span>
          <div>{loc.rate}</div>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>{loc.MMK}</span>
          <span className='siPriceNight'>{loc.pernight}</span>
          <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
        </div>
      </div>
    </div>
        )
    })}
      </div>
      <MailList />
        <Footer/>
    </div>
  )
    }else if(Location==="Kayin State"){
      const Place=KayinHotel.map(place=>place)
      console.log(Place)
      return (
    <div>
        <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
        <HotelHeader/>
      <div className='hotelList'>
        {Place.map(loc=>{
      return(
      <div className='searchItem'>
      <img src={loc.img} alt='' className='siImg'/>
      <div className='siIncludes'>
        <h1 className="sTitle">{loc.hotelName}</h1>
        <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
        <span className="siText">
          {loc.text}
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{loc.grade}</span>
          <div>{loc.rate}</div>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>{loc.MMK}</span>
          <span className='siPriceNight'>{loc.pernight}</span>
          <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
        </div>
      </div>
    </div>
        )
    })}
      </div>
      <MailList />
        <Footer/>
    </div>
  )
    }else if(Location==="Mon State"){
      const Place=MonHotel.map(place=>place)
      console.log(Place)
      return (
    <div>
        <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
        <HotelHeader/>
      <div className='hotelList'>
        {Place.map(loc=>{
      return(
      <div className='searchItem'>
      <img src={loc.img} alt='' className='siImg'/>
      <div className='siIncludes'>
        <h1 className="sTitle">{loc.hotelName}</h1>
        <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
        <span className="siText">
          {loc.text}
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{loc.grade}</span>
          <div>{loc.rate}</div>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>{loc.MMK}</span>
          <span className='siPriceNight'>{loc.pernight}</span>
          <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
        </div>
      </div>
    </div>
        )
    })}
      </div>
      <MailList />
        <Footer/>
    </div>
  )
    }else if(Location==="Rakhine State"){
      const Place=RakhineHotel.map(place=>place)
      console.log(Place)
      return (
    <div>
        <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
        <HotelHeader/>
      <div className='hotelList'>
        {Place.map(loc=>{
      return(
      <div className='searchItem'>
      <img src={loc.img} alt='' className='siImg'/>
      <div className='siIncludes'>
        <h1 className="sTitle">{loc.hotelName}</h1>
        <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
        <span className="siText">
          {loc.text}
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{loc.grade}</span>
          <div>{loc.rate}</div>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>{loc.MMK}</span>
          <span className='siPriceNight'>{loc.pernight}</span>
          <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
        </div>
      </div>
    </div>
        )
    })}
      </div>
      <MailList />
        <Footer/>
    </div>
  )
    }else if(Location==="Shan State"){
      const Place=ShanHotel.map(place=>place)
      console.log(Place)
      return (
    <div>
        <HotelNav place={Location} log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp} />
        <HotelHeader/>
      <div className='hotelList'>
        {Place.map(loc=>{
      return(
      <div className='searchItem'>
      <img src={loc.img} alt='' className='siImg'/>
      <div className='siIncludes'>
        <h1 className="sTitle">{loc.hotelName}</h1>
        <span className="siLoc"><ImLocation2 className='siloc'/>{loc.location}</span>
        <span className="siText">
          {loc.text}
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{loc.grade}</span>
          <div>{loc.rate}</div>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>{loc.MMK}</span>
          <span className='siPriceNight'>{loc.pernight}</span>
          <button className='siCheckButton' onClick={()=>{
              console.log(loc.hotelName)
              navigate(`/hotel/list/${loc.hotelName}`)
            }}>See Details</button>
        </div>
      </div>
    </div>
        )
    })}
      </div>
      <MailList />
        <Footer/>
    </div>
  )
    }
    
}
export default List
