import React from "react";
import './Locations.css';

export default function Locations () {
    return(
        <div className="Locations">
               <p className="location-1">Locations</p>
               <h3 className="location-2">Most Popular Locations</h3>
             <div className="locations-section">
                     <img className="img-location " src="/images/ikeja.png" alt="Location-ikeja" />
                     <img className="img-location " src="/images/Amadi.png" alt="Location-Mokola" />
                     <img className="img-location " src="/images/ikoyi.png" alt="Location-ikoyi" />
                     <img className="img-location " src="/images/Mokola.png" alt="Location-Mokola" />               
             </div>
             <div className="locations-venue">
                 <p>Ikeja</p>
                 <p>Mokola, Ibadan</p>
                 <p className="ikoyi">Ikoyi</p>
                 <p className="amadi">Trans Amadi Gardens</p>
             </div>
        </div>
    )
}