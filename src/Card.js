import React from "react";
import './Card.css';




export default function Card (props) {
    return (
        <div className="card-wrapper">
               <div>{props.title}</div>
               <div>{props.subtitle}</div>
               <div>{props.address}</div>
        </div>
        
    )
}