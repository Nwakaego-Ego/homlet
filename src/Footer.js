import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FaApple} from "react-icons/fa"
import { MdGooglePlayStore} from "react-icons/md"
import './Footer.css';

export default function Footer () {
    return (
        <div className="main">
         <div className="">
           <div className="firstBall">
             <div>
               <img className="ball" src="/images/circle.png" alt="ball" />
               <img className="ball" src="/images/circle.png" alt="ball" />
               <img className="ball" src="/images/circle.png" alt="ball" />
               <img className="ball" src="/images/circle.png" alt="ball" />
               <img className="ball" src="/images/circle.png" alt="ball" />
             </div>
             <div>
               <img className="ball" src="/images/circle.png" alt="ball" />
               <img className="ball" src="/images/circle.png" alt="ball" />
               <img className="ball" src="/images/circle.png" alt="ball" />
               <img className="ball" src="/images/circle.png" alt="ball" />
              <img className="ball" src="/images/circle.png" alt="ball" />
             </div>
           </div>
         </div>
            <div className="pseudo">
               <h2>We are on your mobile phones</h2>
                 <p>Download the Homelet App !</p>
                  <div className="flex">
                  <div className="appleStore">
                  <FaApple className="appleLogo" />
                     <div className="downloadGoogle googleGet">Download on the</div>
                     <div className="downloadGoogle googlePlay">App store</div>
                   </div>
                   <div className="googleStore">
                     {/* <FontAwesomeIcon icon={faTrash  }></FontAwesomeIcon> */}
                     <FaApple className="appleLogo" />
                     <div className="downloadGoogle googleGet">GET IT ON </div>
                     <div className="downloadGoogle googlePlay">Google Play</div>
                  </div>
                  </div>
                  
            </div> 
            <div className="secondBall">
            <div>
               <img className="ball ball2" src="/images/circle.png" alt="ball" />
               <img className="ball ball2" src="/images/circle.png" alt="ball" />
               <img className="ball ball2" src="/images/circle.png" alt="ball" />
               <img className="ball ball2" src="/images/circle.png" alt="ball" />
               <img className="ball ball2" src="/images/circle.png" alt="ball" />
             </div>
             <div>
               <img className="ball ball2" src="/images/circle.png" alt="ball" />
               <img className="ball ball2" src="/images/circle.png" alt="ball" />
               <img className="ball ball2" src="/images/circle.png" alt="ball" />
               <img className="ball ball2" src="/images/circle.png" alt="ball" />
              <img className="ball ball2" src="/images/circle.png" alt="ball" />
             </div> 
            </div>
            
        </div>
    )
}