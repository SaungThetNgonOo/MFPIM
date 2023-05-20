import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import YangonTransport from './YangonTransport'
import MandalayT from './MandalayT'
import Transport from './transport'
import './transport.css'
import ATWAntyWin from './ATW(AntyWin)';
import AungSitKhing from './AungSitKhing';
import CrownExpress from './CrownExpress';
import ELite from './ELite';
import KyalZinHein from './KyalZinHein';
import LinMandalar from './LinMandalar';
import Lumbini from './Lumbini';
import NewMandalarHtun from './NewMandalarHtun';
import NewSeinHtayHlaing from './NewSeinHtayHlaing';
import PearlExpress from './PearlExpress';
import PhoeLaMin from './Phoe La Min';
import ShweSinKyal from './ShweSinKyal';
import TakNayLin from './TakNayLin';
import Universal from './Universal';
import ShweSinSatkyar from './ShweSinSatkyar'
import HintharNyiNaung from './HintharNyiNaung'
import MyatarShin from './MyatarShin'
export const SearchResult=({log,User,setUser,setLogin,login,signUp,setSignUp})=> {
  const {Result}=useParams()
  console.log(Result)
  if(Result==="ATW(AntyWin)"){
    const TravelBy=ATWAntyWin.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>ATW(AntyWin)</span></h5 >
          <table className='table table-bordered'>
            <tr>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="AungSitKhing"){
    const TravelBy=AungSitKhing.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>Aung Sit Khing</span></h5>
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="CrownExpress"){
    const TravelBy=CrownExpress.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>Crown Express</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="ELite"){
    const TravelBy=ELite.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>E Lite</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="KyalSinHein"){
    const TravelBy=KyalZinHein.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>Kyal Sin Hein</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="LinMandalar"){
    const TravelBy=LinMandalar.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>Lin Mandalar</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="Lumbini"){
    const TravelBy=Lumbini.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>Lumbini</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="NewMandalarHtun"){
    const TravelBy=NewMandalarHtun.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>New Mandalar Htun</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="NewSeinHtayHlaing"){
    const TravelBy=NewSeinHtayHlaing.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span> New Sein Htay Hlaing</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="PearlExpress"){
    const TravelBy=PearlExpress.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>Pearl Express</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="PhoeLaMin"){
    const TravelBy=PhoeLaMin.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>Phoe La Min</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="ShweSinKyal"){
    const TravelBy=ShweSinKyal.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>Shwe Sin Kyal</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="TakNayLin"){
    const TravelBy=TakNayLin.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>TakNayLin</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="Universal"){
    const TravelBy=Universal.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>Universal</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="ShweSinSetKyar"){
    const TravelBy=ShweSinSatkyar.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>Shwe Sin SetKyar</span> </h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="HintharNyiNaung"){
    const TravelBy=HintharNyiNaung.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>Hinthar Nyi Naung</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }else if(Result==="MyatarShin"){
    const TravelBy=MyatarShin.map(place=>{
      return(<tr>
        <td>{place.From}</td>
        <td>{place.to}</td>
        <td>{place.time}</td>
        <td>{place.price}</td>
        <td>{place.phone}</td>
        <td>{place.rate}</td>
      </tr>)
      })
      
  return (
        <div>
          <Transport User={User}setUser={setUser}/>
          <h5 className='by'>Travel By <span>Myatar Shin</span></h5 >
          <table className='table table-bordered'>
            <tr className='tr'>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Price</th>
                <th>Phone</th>
                <th>Special</th>
            </tr>
              {TravelBy}
          </table>
        </div>
  )
  }
}
export default SearchResult