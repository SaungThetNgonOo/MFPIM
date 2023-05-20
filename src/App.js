import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './Home/home';
import stateData from './Home/stateData';
import Mon from './State/Mon/Mon';
import MonDetail from './State/Mon/MonDetail';
import Kachin from './State/Kachin/Kachin';
import KachinDetail from './State/Kachin/KachinDetail';
import Rakhine from './State/Rakhine/Rakhine';
import RakhineDetail from './State/Rakhine/RakDetail';
import Kayah from './State/Kayah/Kayah';
import Shan from './State/Shan/Shan';
import ShanDetail from './State/Shan/ShanDetail';
import Chin from './State/Chin/Chin';
import Kayin from './State/Kayin/Kayin';
import KayinDetail from './State/Kayin/KayinDetail';
import State from './Home/State';
import About from './About/about';
import Feedback from './Feedback/feedback';
import divisionData from './Home/divisionData';
import Thaninthayi from './Division/Thaninthayi/Thaninthayi';
import Yangon from './Division/Yangon/Yangon';
import Ayeyarwaddy from './Division/Ayeyarwaddy/Ayeyarwaddy';
import ADetail from './Division/Ayeyarwaddy/ADetail';
import Bago from './Division/Bago/Bago';
import BagoDetail from './Division/Bago/BagoDetail';
import Magway from './Division/Magway/Magway';
import Mandalay from './Division/Mandalay/Mandalay';
import Sagaing from './Division/Sagaing/Sagaing';
import Show from './Home/Show';
import Login from './Login/login';
import ProtectedRoute from './Login/protectedRoute';
import Dashboard from './Login/dashboard';
import SignUp from './Login/SignUp';
import YangonData from './Division/Yangon/YangonData';
import YangonDetail from './Division/Yangon/YangonDetail';
import HotelHome from './Hotel/hotelHome';
import List from './Hotel/List';
import Single from './Hotel/Single';
import MagwayDetail from './Division/Magway/MagwayDetail';
import ManDetail from './Division/Mandalay/ManDetail';
import SagDetail from './Division/Sagaing/SagDetail';
import Transport from './Transport/transport';
import SearchResult from './Transport/searchResult';
function App(){
  const [state,setState]=useState([])
    const [lag,setLag]=useState(false)
    const [division,setDivision]=useState([])
    const [log,setLog]=useState(false)
    const [login,setLogin]=useState(false)
    const [User,setUser]=useState()
    const [signUp,setSignUp]=useState(false)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    
    // const Data=(one)=>{
    //     if(lag===false){
    //         one.map((languages)=>{
    //             setState(languages.English)
    //         })
    //     }
    //     if(lag===true){
    //         one.map((languages)=>{
    //             setState(languages.မြန်မာ)
    //         })
    //     }
    // }
    // useEffect(()=>{
    //     Data(stateData)
    // },[Data])
    
    // const Division=(one)=>{
    //     if(lag===false){
    //         one.map((languages)=>{
    //             setDivision(languages.English)
    //         })
    //     }
    //     if(lag===true){
    //         one.map((languages)=>{
    //             setDivision(languages.မြန်မာ)
    //         })
    //     }
    // }
    // useEffect(()=>{
    //     Division(divisionData)
    // },[Division])
    // console.log(division)
    

  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home state={state} setState={setState} division={division} log={log} setLog={setLog} login={login} setLogin={setLogin}  User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/home' element={<Home state={state} setState={setState} division={division} log={log} setLog={setLog} login={login} setLogin={setLogin} User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail} />} ></Route>
    <Route path='/state/mon' element={<Mon log={log}setLog={setLog} login={login} setLogin={setLogin}User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail} />}></Route>
    <Route path='/state/mon/:placeName'element={<MonDetail lag={lag}log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}signUp={signUp}setSignUp={setSignUp}/>}name={name}setName={setName}email={email}setEmail={setEmail}></Route>
    <Route path='/state/kayin' element={<Kayin log={log}setLog={setLog} login={login} setLogin={setLogin}User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail} />}></Route>
    <Route path='/state/kayin/:placeName'element={<KayinDetail lag={lag}log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/state/rakhine' element={<Rakhine log={log}setLog={setLog} login={login} setLogin={setLogin}User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail} />}></Route>
    <Route path='/state/rakhine/:placeName'element={<RakhineDetail lag={lag}log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/state/kayah' element={<Kayah log={log}setLog={setLog} login={login} setLogin={setLogin}User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail} />}></Route>
    <Route path='/state/shan' element={<Shan log={log}setLog={setLog} login={login} setLogin={setLogin}User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail} />}></Route>
    <Route path='/state/shan/:placeName'element={<ShanDetail lag={lag}log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}signUp={signUp}setSignUp={setSignUp}/>}></Route>
    <Route path='/state/chin' element={<Chin log={log}setLog={setLog} login={login} setLogin={setLogin}User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail} />}></Route>
    <Route path='/state/kachin'  element={<Kachin log={log}setLog={setLog} login={login} setLogin={setLogin} User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/state/kachin/:placeName'element={<KachinDetail lag={lag}log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    {/* <Route path='/state/ကချင်' element={<Kachin log={log}setLog={setLog} login={login} setLogin={setLogin} User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}/>}></Route> */}
    {/* <Route path='/show' element={<Show />}></Route>  */}
    <Route path='/division/thaninthayi' element={<Thaninthayi lag={lag} log={log}setLog={setLog} login={login} setLogin={setLogin}User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail} />}></Route>
    {/* <Route path='/division/တနင်္သာရီ' element={<Thaninthayi lag={lag} log={log}setLog={setLog} login={login} setLogin={setLogin}User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp} />}></Route> */}
    <Route path='/division/yangon' element={<Yangon lag={lag} log={log}setLog={setLog} login={login} setLogin={setLogin}User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/division/yangon/:placeName'element={<YangonDetail lag={lag}log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/division/ayeyarwaddy' element={<Ayeyarwaddy lag={lag} log={log}setLog={setLog} login={login} setLogin={setLogin}User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail} />}></Route>
    <Route path='/division/ayeyarwaddy/:placeName'element={<ADetail lag={lag}log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/division/bago' element={<Bago lag={lag} log={log}setLog={setLog} login={login} setLogin={setLogin}User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail} />}></Route>
    <Route path='/division/bago/:placeName'element={<BagoDetail lag={lag}log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/division/magway' element={<Magway lag={lag} log={log}setLog={setLog} login={login} setLogin={setLogin}User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail} />}></Route>
    <Route path='/division/magway/:placeName'element={<MagwayDetail lag={lag}log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/division/mandalay' element={<Mandalay lag={lag} log={log}setLog={setLog} login={login} setLogin={setLogin} User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/division/mandalay/:placeName'element={<ManDetail lag={lag}log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/division/sagaing' element={<Sagaing lag={lag} log={log}setLog={setLog} login={login} setLogin={setLogin}User={User} setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail} />}></Route>
    <Route path='/division/sagaing/:placeName'element={<SagDetail lag={lag}log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/about' element={<About lag={lag}log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/feedback' element={<Feedback log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/transport' element={<Transport log={log}setLog={setLog}login={login}setLogin={setLogin}User={User}setUser={setUser}/>}></Route>
    <Route path='/dashboard' element={
        <ProtectedRoute User={User}>
            <Dashboard login={login} setLogin={setLogin} User={User} 
            setUser={setUser} state={state} setState={setState} log={log}name={name}setName={setName}email={email}setEmail={setEmail}
            setLog={setLog}lag={lag} division={division}signUp={signUp}setSignUp={setSignUp}/>
        </ProtectedRoute>}></Route>
    {/* <Route path='/login' element={ User?<Navigate to="/home"/>: <Login  login={login} setLogin={setLogin} User={User} />}></Route>
    <Route path='/signUp' element={<SignUp />}></Route> */}
    <Route path='/hotel' element={<HotelHome login={login}setLogin={setLogin}User={User}
    setUser={setUser}log={log}signUp={signUp}setSignUp={setSignUp}/>}name={name}setName={setName}email={email}setEmail={setEmail}></Route>
    <Route path='/hotel/:Location'element={<List login={login}setLogin={setLogin}User={User}
    setUser={setUser}log={log}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>} ></Route>
    {/* <Route path='/hotel/list'element={<List login={login}setLogin={setLogin}User={User}
    setUser={setUser}log={log}signUp={signUp}setSignUp={setSignUp}/>} ></Route> */}
    <Route path='/hotel/list/:Single' element={<Single login={login}setLogin={setLogin}User={User}
    setUser={setUser}log={log}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    <Route path='/transport/:Result' element={<SearchResult login={login}setLogin={setLogin}User={User}
    setUser={setUser}log={log}signUp={signUp}setSignUp={setSignUp}name={name}setName={setName}email={email}setEmail={setEmail}/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App