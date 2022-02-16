import React from "react";
import './Button.css';

export default function Button () {
    return (
        <div className="Button-section">
            <div className="frame">
                <button>Location <img  src="/images/Frame.png" alt="frame" /> <img className="line" src="/images/Line.png"  alt="line" /> </button>
                <button>Type <img src="/images/Frame.png" alt="frame" /> <img className="line" src="/images/Line.png"  alt="line" /> </button>
                <button>Profession <img  src="/images/Frame.png" alt="frame" /> <img className="line" src="/images/Line.png"  alt="line" /></button>
                <button>Max. Price <img  src="/images/Frame.png" alt="frame" /> <img className="line" src="/images/Line.png"  alt="line" /> </button>
                <button className="search" >Search <img className="search-button" src="/images/search.png" alt="frame" /></button>
            </div>
        </div>
    )
}