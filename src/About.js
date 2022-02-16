import React from "react"
import './About.css';

export default function About () {
    return (
                <div className="Apartment">
                    <div className="about-img">
                         <div className="about-section-1">
                             <img className="about-img-1" src="/images/blue.png" alt="blue" />
                             <img className="about-img-2" src="/images/apartment.png" alt="sky" />
                         </div>
                         <div className="about-section-2">
                             <p className="about-heading">About Homelet</p>
                             <h3 className="about-paragraph-1">We link you with <span className="primary-color">flatmates </span> that suit your <span className="primary-color">criteria </span></h3>
                             <p className="about-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                            <p className="about-paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            <button className="about-btn-learn-more">learn more</button>
                         </div>
                    </div>

                </div>
    )
}