import React from "react";
import './properList.css'
const ProperList=()=>{
return(
    <div className="pList">
        <div className="pListItem">
            <img src={require("../AllHoteldb/Eskala Hotels and Resorts/img6.jpg")} alt="" className="pListImg"/>
            <div className="pListTitles">
                <h1>Eskala Hotels and Resort</h1>
                <h2>Beach mode</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={require("../AllHoteldb/Shwe Pyi Resort/img10.jpg")} alt="" className="pListImg"/>
            <div className="pListTitles">
                <h1>Shwe Pyi Resort</h1>
                <h2>Wooden Decoration</h2>
            </div>
        </div>
        <div className="pListItem">
        <img src={require("../AllHoteldb/Amata Garden Resort Bagan/img2.jpg")} alt="" className="pListImg"/>
            <div className="pListTitles">
                <h1>Amata Garden Resort Bagan</h1>
                <h2>New Age Decoration</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={require("../AllHoteldb/Dragon Phoenix Hotel/img8.jpg")} alt="" className="pListImg"/>
            <div className="pListTitles">
                <h1>Dragon Phoenix Hotel</h1>
                <h2>Fantastic Decoration</h2>
            </div>
        </div>
        <div className="pListItem">
        <img src={require("../AllHoteldb/Pan Pacific Yangon/img4.jpg")} alt="" className="pListImg"/>
            <div className="pListTitles">
                <h1>Pan Pacific Yangon</h1>
                <h2>Luxuy Decoration</h2>
            </div>
        </div>
    </div>
)
}
export default ProperList