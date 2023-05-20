/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Nav from "../Navigation/Nav";
import './feedback.css'
import {IoPersonCircle} from "react-icons/io5";
import Login from "../Login/login";
import SignUp from "../Login/SignUp";
import '../Home/home.css'
import '../Login/Login.css'
function Feedback({User,setUser,log,setLogin,login,signUp,setSignUp,name,setName,email,setEmail}){
   var [arr,setArr]= useState([])
   const [message,setMessage]=useState('')
   const [feed,setFeed] = useState({
    Name:"",
    Text:""
   })
    
    
    function clear(){
        document.getElementById("msg").value=''
    }
    // function showText(){
    //     const text=document.getElementById("msg").value
    //     document.getElementById("demo").innerHTML=text
    //     // setIndex(document.getElementById("msg").value)
    //     const newThing=`${User} ${document.getElementById("demo").textContent}`
    //     arr.push(newThing)
    //    clear()
    // }
    function logout(){
        setUser('')
    }
    function handlelogin(){
        setLogin(login=true)
    }
    const hanldeSubmit=async(e)=>{
        e.preventDefault()
        console.log(name,email)
        setUser({name:name,email:email})
        // const text=document.getElementById("msg").value
        // const message=document.getElementById("msg").value
        console.log(message)
        // document.getElementById("demo").innerHTML=text
        feed.Name=name
        feed.Text=message
        setFeed(prev => ({...prev}))
        setArr(prev => ([...prev,feed]))
       clear()
       console.log(email)
    }
    
    console.log(arr)
    console.log(User)
    console.log(login)
    console.log(signUp)
    return(
        <div className="feed">
            <Nav log={log} login={login} setLogin={setLogin} User={User} setUser={setUser}/>
            <div className="logins">
            {login?<Login login={login}setLogin={setLogin}signUp={signUp}setSignUp={setSignUp}
            User={User}setUser={setUser}name={name}setName={setName}email={email}setEmail={setEmail}
            />:<div></div>}
            {signUp?<SignUp login={login} setLogin={setLogin} name={name}setName={setName}email={email}setEmail={setEmail}
             User={User} setUser={setUser} signUp={signUp}setSignUp={setSignUp}
             />:<div></div>}
            </div>
            <div className="feedb">
                <h1 className="feedHeader">Contact Us</h1>
                <div className="feeddiv">You can give us feedback as a comment or review.
                    But if you want to contact us you need to first 
                    Login to your account.</div>
                    {User ?<div className="User">
                        <span>{User?.name.length>6? User.name.slice(0,6):User.name }</span>
                         <button onClick={logout}>LogOut!</button> 
                        </div>:<button className="feedlog"onClick={handlelogin}>Login!</button>}
            </div>
            <div class="secondcontact2">
                <div class="secondcontact20">
                    <form >
                        <div class="secondcontact21">
                            <div class="secondcontact210">
                                <label>Name</label>
                                {User?<input type="text"value={User.name} name="txtname" id="uname" 
                                onChange={(e)=>setName(e.target.value)} required/>:
                                <input type="text" name="txtname" id="name"value={name}
                                onChange={(e)=>setName(e.target.value)} required/>}
                            </div>
                            <div class="secondcontact210">
                                <label>Email</label>
                                {User?<input type="text"value={User.email} name="txtmail" id="umail"
                                onChange={(e)=>setEmail(e.target.value)} required/>:
                                <input type="text" name="txtmail" id="mail"value={email}
                                onChange={(e)=>setEmail(e.target.value)} required/>}
                            </div>
                        </div>
                        <div class="secondcontact211">
                            <label>Subject</label>
                            <input type="text" name="txtsub" id="sub"/>
                        </div>
                        <div class="secondcontact212">
                            <label class="ms">Message</label>
                            <textarea class="secondcontact230" id="msg" onChange={(e)=>setMessage(e.target.value)}
                            ></textarea>
                        </div>
                    </form>
            <button type="submit" class="sumitbtn" onClick={hanldeSubmit}>SEND MESSAGE</button>
        </div>
        {arr.map(ar=>{
            return(
            <div className="comments">
                <IoPersonCircle/><span>{ar.Name}</span>
              <p>{ar.Text}</p>
            </div>
            )
        })}
            {/* <div className="comments">
                <span><IoPersonCircle/>  {User?.name}</span>
                <p>{message}</p>
            </div> */}
        </div>
    </div>
    )
}
export default Feedback