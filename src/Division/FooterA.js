import React from "react";
import { Link } from "react-router-dom";
import './Div.css'
import { useLocation } from "react-router-dom";
function FooterA({User}){
    console.log(Location)
    return(
        <div className="Afooter">
            <div className="Af1">
                <h5>Most Famous Place In Myanmar(MFPIM)</h5>
                <ul>
                    <li>Tel:+95 695892110 / 798221338</li>
                    <li>Website:www.mfpim.com</li>
                </ul>
            </div>
        </div>
    )
}export default FooterA