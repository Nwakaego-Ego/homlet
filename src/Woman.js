import React from "react"
import './Woman.css';

export default function Woman () {
    return (
        <div className="Woman">
             <h3 className="woman-h3">Homlet for <span className="primary-color">Property Owners</span></h3>
            <div className="woman-section-1">
                     <img className="woman-img-section-1" src="/images/blue.png" alt="blue" />
                     <img className="woman-img-section-2" src="/images/woman.png" alt="sky" />
            </div>
            <div className="woman-main-section">
            <div className="Woman-section-2">
               <div className="woman-register-section">
              <div className="woman-image">
              <img className="woman-img-face-circle " src="/images/circle.png" alt="face" />
               <img className="woman-img-face" src="/images/face.png" alt="face" />
              </div>
                <p className="woman-register">Register as a host</p>
                <p className="woman-create-account">Create your account easily in just few step</p>
               </div>
            </div>
            <div className="woman-section-3">
               <div className="woman-register-section">
               <img className="woman-img-face-circle " src="/images/circle.png" alt="face" />
               <img className="woman-img-face" src="/images/video.png" alt="face" />
                <p className="woman-register">Add Property Listing</p>
                <p className="woman-create-account">Create property ads and set preferred filter as a host</p>
               </div>
            </div>
            <div className="woman-section-4">
               <div className="woman-register-section">
               <img className="woman-img-face-circle " src="/images/circle.png" alt="face" />
               <img className="woman-img-face" src="/images/mark.png" alt="face" />
                <p className="woman-register">Accept Flatmate Requests</p>
                <p className="woman-create-account">Accept requets from flatmates of your choice , collect your payment</p>
               </div>
            </div>
            </div>
           
            
        </div>
    )
}