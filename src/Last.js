import React from "react"
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"
import './Last.css';


export default function Last () {
    return (
        <div className="main-container">
        <div className="last-container">
            <div>
                <h1>Homlet</h1>
            </div>
            <div>
                <h1>Company</h1>
                <div>Partner</div>
                <div>Service</div>
                <div>Careers</div>
                <div>Support</div>
            </div>
            <div>
                <h1>Service</h1>
                <div>Properties</div>
                <div>Rent</div>
                <div>Sale</div>
            </div>
            <div>
                <h1>Quick links</h1>
                <div>FAQ</div>
                <div>Suport</div>
                <div>Private Policy </div>
                <div>Contact</div>
            </div>
            <div>
                <h1>Contact</h1>
                <div>080 54673 678</div>
                <div>support@homlet.com</div>
                <FaFacebook className="appleLogo" />
                <FaInstagram className="appleLogo" />
                <FaTwitter className="appleLogo" />
            </div>
            </div>
            <div className="copyRight">2021 All Rights Reserved by Homlet <span className="usd"> $ USD</span></div>
            </div>
       
    )
}