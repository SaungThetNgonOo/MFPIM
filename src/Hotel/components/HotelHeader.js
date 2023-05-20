import React from 'react'
import '../hotel.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const HotelHeader = ({log,User,setUser,setLogin,login,signUp,setSignUp}) => {
    console.log(User)
     const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openDate,setOpenDate]=useState(false)
  const [openOption,setOpenOption]=useState(false)
  const [destination,setDestination]=useState("")
  const [select,setSelect]=useState("")
  const [options,setOptions]=useState({
    adult:1,
    children:0,
    room:1,
  })
  const navigate=useNavigate()

  const handleOption=(name,operation)=>{
    setOptions((prev)=>{
        return {...prev,
        [name]:operation==="i"? options[name]+ 1: options[name]- 1,
    };
    })
  }

  function handleChange(event){
    setSelect(prev=>{
        return{
            ...prev,
            [event.target.name]:event.target.value
        }
    })
  }
  console.log(select)
  
  return (
              <div className="headerSearch">                    
              <select className='headerSearchItem'id='fav'placeholder="search" value={select.fav} name='fav' onChange={handleChange}>
                    <option value="">choose...</option>
                    <option id='favItem' value="Ayeyarwaddy Division">Ayeyarwaddy Division</option>
                    <option id='favItem' value="Bago Division">Bago Division</option>
                    <option id='favItem' value="Magway Division">Magway Division</option>
                    <option id='favItem' value="Mandalay Division">Mandalay Division</option>
                    <option id='favItem' value="Sagaing Division">Sagaing Division</option>
                    <option id='favItem' value="Thaninthayi Division">Thaninthayi Division</option>
                    <option id='favItem' value="Yangon Division">Yangon Division</option>
                    <option id='favItem' value="Chin State">Chin State</option>
                    <option id='favItem' value="Kachin State">Kachin State</option>
                    <option id='favItem' value="Kayah State">Kayah State</option>
                    <option id='favItem' value="Kayin State">Kayin State</option>
                    <option id='favItem' value="Mon State">Mon State</option>
                    <option id='favItem' value="Rakhine State">Rakhine State</option>
                    <option id='favItem' value="Shan State">Shan State</option>
                </select>
                {/* <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input type="text" placeholder="Where are you going" className="headerSearchInput"onChange={e=>setDestination(e.target.value)}/>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span className="headerSearchText" onClick={()=>setOpenDate(!openDate)}>
                        {`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                    {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    // minDate={new Date()}
                    ranges={date} className="date"
                    />}
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span onClick={()=>setOpenOption(!openOption)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                    {openOption && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton"disabled={options.adult <= 1}onClick={()=>handleOption("adult","d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterButton"onClick={()=>handleOption("adult","i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">children</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton"disabled={options.children<= 0}onClick={()=>handleOption("children","d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton"disabled={options.room <= 1}onClick={()=>handleOption("room","d")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                            </div>
                        </div>
                    </div>}
                </div> */}

                <div className="headerSearchItem headerSearchBtn">
                    {/* {HotelsByDS.map(loc=>(
                    <div>
                        
                    </div>
                    ))
                } */}
                <Link to={`/hotel/${select.fav}`}log={log} User={User}setUser={setUser}
                setLogin={setLogin}login={login}signUp={signUp}setSignUp={setSignUp}>
                        <button className="headerBtn">Search</button>
                </Link>
                </div>
            </div>
  )
}
export default HotelHeader
