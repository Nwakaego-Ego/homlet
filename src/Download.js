import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FaApple} from "react-icons/fa"
import { MdGooglePlayStore} from "react-icons/md"
import './Download.css';

export default function Download () {
    return (
        <div className="main">
         <div className="">
           <div className="mainBall">
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
                     
                   </div>
                   <div className="googleStore">
                     {/* <FontAwesomeIcon icon={faTrash  }></FontAwesomeIcon> */}
                     <FaApple className="appleLogo" />
                     <div className="downloadGoogle googleGet">GET IT ON </div>
                     <div className="downloadGoogle googlePlay">Google Play</div>
                  </div>
                  </div>
                  
            </div> 
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
    )
}