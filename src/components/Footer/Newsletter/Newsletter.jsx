import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa"


import "./Newsletter.scss";
const Newsletter = () => {
    return <div className="newsletter-section">
     <div className="newletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latst updates and offers</span>
        <div className="form">
            <input type="text" placeholder="Email Address" />
            <button>Subcribe</button>
        </div>
        <div className="text">Wll be used in accordance with our Privacy Policy</div>
        <div className="socical-icons">
            <div className="icon">
                <FaFacebookF size={14}/>
            </div>
            <div className="icon">
                <FaTwitter size={14}/>
            </div>
            <div className="icon">
                <FaInstagram size={14}/>
            </div>
            <div className="icon">
                <FaLinkedinIn size={14}/>
            </div>
        </div>
     </div>
    
    </div>;
};

export default Newsletter;
