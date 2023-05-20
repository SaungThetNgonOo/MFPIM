import React from "react";
import HotelNav from "./components/HotelNav";
import Feautred from "./components/Featured";
import ProperList from "./components/propertyList";
import FeatureProperties from "./components/FeatureProperties";
import MailList from "./components/MailList";
import Footer from "./components/Footer";
import Login from "../Login/login";
import SignUp from "../Login/SignUp";
import HotelHeader from "./components/HotelHeader";
import '../Login/Login.css'
function HotelHome({log,User,setUser,setLogin,login,signUp,setSignUp,name,setName,email,setEmail}){
    console.log(User)
    return(
        <div className="hotels">
            <HotelNav log={log}User={User}setUser={setUser}setLogin={setLogin}login={login}/>
            <HotelHeader log={log}User={User}setUser={setUser}setLogin={setLogin}login={login} />
            <div className="homeContainer">
               <Feautred/> 
               <h1 className="homeTitle">Browse By properties Type</h1>
               <ProperList />
               <h1 className="homeTitle">Homes guests love</h1>
               <FeatureProperties/>
               <MailList/>
                <Footer/>
            </div>
        </div>
    )
}
export default HotelHome