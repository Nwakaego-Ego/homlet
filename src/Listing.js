import React from "react";
import './Listing.css';
import Card from "./Card"
import List from "./List"

const data =[
  {id: 1,
    title: "map",
    subtitle: "brown",
    address: "kirikiri",
    Card:  <img className="house-1 listing-img" src="/images/house-1.png" alt="House" />
  },

  {id: 2,
    title: "pam",
    subtitle: "black",
    address: "festac"
  }
]

export default function Listing () {
    return (
        <div className="Listing">
              <div className="listing-section">
                      <p className="recent">Recent</p>
                       <span className="recently-added">Recently Added Listings <span className="recently-addedd-view-all">View All</span></span>
                       <img className="direction-arrow" src="/images/direction.png" alt="direction-arrow"/>
                       <br/>
                     <img className="rectangle listing-img" src="/images/Rectangle.png" alt="Lady" />
                     <img className="house-1 listing-img" src="/images/house-1.png" alt="House" />
                       <button className="listing-btn">Flat Owner</button> 
                       <br/>
                      
                     <span className="bed-room">2 bedroom apartment for sharing <span className="flat-quest">Send Flatquest</span></span>
                     <img className="vertical" src="/images/vertical.png" alt="vertical-line"/>
                     <p className="amount-naira">NGN 200, 000 1yr</p>
                    <img className="address"  src="/images/Address.png" alt="Address" />   
               </div>
                   <span className="street">6, Oduduwa Crescent, Ikeja GRA</span>           
              {data.map(item=><Card title={item.title} subtitle={item.subtitle} address={item.address} Card={item.Card}/>) }
              <List/>
        </div>
    )

    
}


