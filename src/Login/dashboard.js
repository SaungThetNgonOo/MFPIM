import React from "react";
import Nav from "../Navigation/Nav";
import Home from "../Home/home";
import '../Home/home.css'
import '../Navigation/Nav.css'
function Dashboard({state,setState,lag,division,log,setLog,login,setLogin,User,setUser,name,setName,email,setEmail}){
    return(
        <div>
            <Home User={User} login={login} setLogin={setLogin} setUser={setUser} 
            state={state} setState={setState} log={log} setLog={setLog}lag={lag} 
            division={division}name={name}setName={setName}email={email}setEmail={setEmail}/>
        </div>
    )
}
export default Dashboard