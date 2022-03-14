import React from "react"


import './Contact.css';

export default function Contact () {
    return (
        <div className="contact">
            <h1>Have something in mind?</h1>
            <h3>Let us help you</h3>
            <input type="search" className="searchButton"
            />
            <span className="homletEmail">Name@example.com</span>
            <button className="send">Send</button>
           
        </div>
    )
}