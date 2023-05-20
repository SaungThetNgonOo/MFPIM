import React from "react";
import { Link } from "react-router-dom";
function Show({data,setlag,lag,image,name,paragraph,btn}){
    return(
        <div className="division-div">
            <div className="div-name">{name}</div>
            <div className="div-div">
                <img src={image} alt={name} className="div-img" />
            <div className="div-p">{paragraph.length >0 ? paragraph.slice(0,400)+"...":paragraph}</div>
            <Link to={`/division/${name}`} className="division"><button className="div-btn">{btn}</button></Link>
            </div>
        </div>
    )
}
export default Show