import React from "react";
import "./Listing.css";
import Card from "./Card";



export default function Listing({
  id,
  imagePath,
  tag,
  info,
  price,
  address
}) {
  return (
    <div className="listing">
        <div className="background">
        <img src={imagePath}/>
       <div className="listFooter">
       <div>{tag}</div>
        <div>{info} <span className="flat">send flat request</span></div>
        <div>{price}</div>
        <div> <img src="/images/Address.png"/>6, Oduduwa Cresce\nt Ikaja, GRA</div>
       </div>
        </div>
    </div>
  );
}
