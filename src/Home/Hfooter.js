import React from "react";
import '../Navigation/Nav.css'
import {FaFacebook} from "react-icons/fa";
import {FaGooglePlus} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
function Hfooter(){
    return(
        <div className="hfooter">
            <div className="HFlogo">
                <span className="flogo">MFPIM</span>
                <div className="hhr"></div>
            </div>
            <div className="footer">
                <div className="hsocial">
                    <div>Follow Us On:</div>
                    <div className="hicon">
                        <FaFacebook />
                        <FaGooglePlus/>
                        <FaInstagramSquare/>
                        <FaTwitterSquare/>
                    </div>
                </div>
            <div className=" footer2">
                <div className="footer2Item">
                    
                    <ul>
                        <li><h6>Project</h6></li>
                        <li>About Us</li>
                        <li>Team</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div className="footer2Item">
                    
                    <ul>
                        <li><h6>Community</h6></li>
                        <li>GitHub</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className="footer2Item">
                    
                    <ul>
                        <li><h6>Policies</h6></li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        </ul>
                </div>
                <div className="footer2Item">
                    
                    <ul>
                        <li><h6>More</h6></li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Hfooter