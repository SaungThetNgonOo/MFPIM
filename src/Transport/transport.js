import React, { useState } from 'react'
import Nav from '../Navigation/Nav'
import {IoRepeat} from "react-icons/io5";
import YangonTransport from './YangonTransport';
import MandalayT from './MandalayT';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import './transport.css'
import Login from '../Login/login';
import SignUp from '../Login/SignUp';
function Transport({log,setLog,User,setUser,setLogin,login,signUp,setSignUp,name,setName,email,setEmail})  {
  const navigate=useNavigate()
   const [start,setStart]=useState("")
  const [end,setEnd]=useState("")
  function handleSearch(event){
    setStart(prev=>{
        return{
            ...prev,
            [event.target.name]:event.target.value

        }
    })
    // console.log('clicked')
  }

     
  
  console.log(start)
      console.log(end)
  return (
    <div>
      <div>
        <Nav User={User} setUser={setUser}/>
        {/* <div className="login">
                {login?<Login login={login} setLogin={setLogin}name={name}setName={setName}email={email}setEmail={setEmail}
                User={User} setUser={setUser} setLog={setLog}signUp={signUp}setSignUp={setSignUp} 
                />:<div></div>}
                {signUp?<SignUp login={login} setLogin={setLogin}name={name}setName={setName}email={email}setEmail={setEmail} 
                User={User} setUser={setUser} setLog={setLog}signUp={signUp}setSignUp={setSignUp}
                />:<div></div>}
            </div> */}
        <div className='transport'>
            <div className='tran'>
              <div className='tra'>
                <h1>BusExpress In Myanmar,</h1>
              {/* <img src={require('./comseat2.jpg')} alt='img.name' className='seat' /> */}
              <div className='transportS'><select id="from" value={start.from}name='from' onChange={handleSearch} >
                  <option value="">choose..</option>
                  <option value="ATW(AntyWin)">ATW (AntyWin)</option>
                  <option value="AungSitKhing">Aung Sit Khing</option>
                  <option value="CrownExpress">Crown Express</option>
                  <option value="ELite">E Lite</option>
                  <option value="KyalSinHein">Kyal Sin Hein</option>
                  <option value="LinMandalar">Lin Mandalar</option>
                  <option value="Lumbini">Lumbini</option>
                  <option value="NewMandalarHtun">New Mandalar Htun</option>
                  <option value="NewSeinHtayHlaing">New Sein Htay Hlaing</option>
                  <option value="PearlExpress">Pearl Express</option>
                  <option value="PhoeLaMin">Phoe La Min</option>
                  <option value="ShweSinKyal">Shwe Sin Kyal</option>
                  <option value="TakNayLin">Tak Nay Lin</option>
                  <option value="Universal">Universal</option>
                  <option value="ShweSinSetKyar">Shwe Sin SetKyar</option>
                  <option value="HintharNyiNaung">Hinthar Nyi Naung</option>
                  <option value="MyatarShin">Myatar Shin</option>
                </select>
              <IoRepeat className='ticon'/>
                <Link to={`/transport/${start.from}`}>
                  <button className='transportSbtn'>search</button>
                </Link>
            </div>
            <span>Comfort & Style Over Every Mile</span>
            </div>
            </div>   
        </div>
        
    </div>
    </div>
  )
}
export default Transport
