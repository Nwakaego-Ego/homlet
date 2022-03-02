import React from "react";
import './Card.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"


// const cardPort = [
//     {
        
//     }
// ]

export default function Card (props) {
    return (
        <div className="card-wrapper">
                <img className="house" src="/images/house-2.png" alt="face" />
               <div className="card-section">
                 <div className="flat-owner">Flat Owner</div>
                     <div>2 bed room apartment for sharing <span className="send">Send flat mate</span></div>
                         <div>NGN 200, 000 1 yr</div>
                            <img className="address-logo" src="/images/Address.png" alt="face" />
                             <span>Oduduwa Cresent, Ikeja GRA</span>
                             <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
               </div>
        </div>
        
    )   
}