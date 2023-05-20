import React from "react";
import { Link } from "react-router-dom";
import './home.css'
// import './state.css'
function StateList({data,name,paragraph,image}){
    return(
        <Link to={`/state/${name}`} className="states">
        <div className="states-list">
            <div className="states-img">
                <img src={image} alt={name} />
            </div>
            <div className="states-div">
            <div className="states-name">{name}</div>
            <div className="states-p">{paragraph.length >0 ? paragraph.slice(0,140)+"...":paragraph}</div>
            </div>
        </div>
        </Link>
    )
}export default StateList