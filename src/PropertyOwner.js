import React from "react";
import './PropertyOwner.css';

export default function Property () {
    return (
        <div className="Property">
             <h3 className="property-h3">Homlet for <span className="primary-color">Property Owners</span></h3>
            <div className="property-section-1">
                     <img className="img-section-1" src="/images/blue.png" alt="blue" />
                     <img className="img-section-2" src="/images/man.png" alt="sky" />
            </div>
            <div className="section">
            <div className="Property-section-2">
               <div className="register-property-section">
              <div className="image">
              <img className="img-face-circle " src="/images/circle.png" alt="face" />
               <img className="img-face" src="/images/face.png" alt="face" />
              </div>
                <p className="register">Register as a host</p>
                <p className="create-account">Create your account easily in just few step</p>
               </div>
            </div>
            <div className="Property-section-3">
               <div className="register-property-section">
               <img className="img-face-circle " src="/images/circle.png" alt="face" />
               <img className="img-face" src="/images/video.png" alt="face" />
                <p className="register">Add Property Listing</p>
                <p className="create-account">Create property ads and set preferred filter as a host</p>
               </div>
            </div>
            <div className="Property-section-4">
               <div className="register-property-section">
               <img className="img-face-circle " src="/images/circle.png" alt="face" />
               <img className="img-face" src="/images/mark.png" alt="face" />
                <p className="register">Accept Flatmate Requests</p>
                <p className="create-account">Accept requets from flatmates of your choice , collect your payment</p>
               </div>
            </div>
            </div>
           
            
        </div>
    )
}