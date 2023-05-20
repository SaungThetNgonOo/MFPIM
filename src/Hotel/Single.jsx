import React, { useState } from 'react'
import './Single.css'
import HotelNav from './components/HotelNav'
import HotelHeader from './components/HotelHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import MailList from './components/MailList'
import Footer from './components/Footer'
import AllHotel from './AllHotel'
import Ayehotels from './HotelsDb/Aye/Ayehotels'

export const Single = ({ log, User, setUser, setLogin, login, signUp, setSignUp }) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const { Single } = useParams()
  console.log(Single)
  //   const photos = [
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  //   },
  // ];
  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 9 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 9 ? 0 : slideNumber + 1;

    }
    setSlideNumber(newSlideNumber)
  }
  const single = AllHotel.find(place => place.Hname === Single)
  console.log(single)
  return (
    <div>
      <HotelNav place={Location} log={log} User={User} setUser={setUser} setLogin={setLogin} login={login} signUp={signUp} setSignUp={setSignUp} />
      <div className='hotelContainer'>
        {open && <div className='slider'>
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove("l")} />
          <div className="sliderWrapper">
            <img src={single.img[slideNumber]} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove("r")} />
        </div>}
        <div className='hotelWrapper'>
          {/* <button className='bookNow'>Reserve or Book Now!</button> */}
          <h1 className='hotelTitle'>{single.Hname}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{single.location}</span>
          </div>
          <div className='hotelDefine'>
            <span className='hotelRate'>
              {single.rate}
            </span>
            <span className='hotelGrade'>
              {single.grade}
            </span>
          </div>
          <div className="hotelImages">
            {single.img.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={single.img[i]}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              {/* <h1 className="hotelTitle">Stay in the heart of Krokow</h1> */}
              <p className='hotelDesc'>
                {single.Text}</p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>{single.stext}</h1>
              <span>
                {single.property1}
              </span>
              <span>
                {single.property2}
              </span>
              <span>
                {single.porperty3}
              </span>
              <h2>
                {single.stext2}
              </h2>
              <span>{single.Bf}</span>
              <div className="contact">
                <h4>Contact.....</h4>
                <h6><FontAwesomeIcon icon={faPhone} /> <span>{single.Phone}</span></h6>
                <h6><FontAwesomeIcon icon={faEnvelope} /> <span>{single.email}</span></h6>
              </div>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}
export default Single
