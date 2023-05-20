import React from "react";
import './feautre.css'

const Feautred=()=>{
return(
    <div className="featured">
        <div className="featureItem">
            <img src={require("../AllHoteldb/@The Sea/img1.jpg")} alt=""className="featuredImg" />
            <div className="featuredTitles">
                <h1>@The Sea</h1>
                <h2>Fabulous</h2>
            </div>
        </div>
        <div className="featureItem">
            <img src={require("../AllHoteldb/Bagan View Hotel/img1.jpg")} alt=""className="featuredImg" />
            <div className="featuredTitles">
                <h1>Bagan View Hotel</h1>
                <h2>Fabulous</h2>
            </div>
        </div>
        <div className="featureItem">
            <img src={require("../AllHoteldb/Melia Yangon/img1.jpg")} alt=""className="featuredImg" />
            <div className="featuredTitles">
                <h1>Melia Yangon</h1>
                <h2>Very good</h2>
            </div>
        </div>
    </div>
)
}
export default Feautred