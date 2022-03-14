import React from "react";
import Button from "./Button";
import About from "./About";
import Locations from "./Locations";
import Listing from "./Listing";
import PropertyOwner from "./PropertyOwner";
import Woman from "./Woman";
import "./Header.css";
import Card from "./Card";
import Footer from "./Footer";
import Contact from "./Contact";
import Last from "./Last";

import { cardData } from "./data/data";

export default function Header() {
  return (
    <div className="Header">
      <span className="header-1">
        Hom<span className="primary-color">let</span>
      </span>
      <span className="header-2">
        <span className="host">Host your apartment</span>
        <button className="btn-login">Login</button>
      </span>

      <div className="header-paragraph">
        <div className="paragraph-section">
          <p className="paragraph-1">
            Find Great <span className="primary-color">People</span> To{" "}
            <span className="primary-color">Share Your Apartment</span> With.
          </p>
          <p className="paragraph-2">
            We deliver your taste in reality. Patronize us and you will the
            better for.{" "}
          </p>
          <button className="btn-learn-more">learn more</button>
        </div>

        <div className="img-section">
          <img className="img-1" src="/images/blue.png" alt="blue" />
          <img className="img-2" src="/images/photo.png" alt="sky" />
        </div>
      </div>
      <Button />
      <About />
      <Locations />
      <div className="listingContainer">
      {cardData.map((item)=> (
         <Listing
         imagePath = {item.imagePath}
         tag = {item.tag}
         inf0 = {item.info}
         price = {item.price}
         address = {item.address}
         />
  ))}
      </div>
      <PropertyOwner />
      <Woman />
      <div className="card-container">
        {cardData.map((el) => (
          <Card
            imagePath={el.imagePath}
            address={el.address}
            tag={el.tag}
            price={el.price}
            info={el.info}
          />
        ))}
      </div>
      <Footer/>
      <Contact/>
      <Last/>
    </div>
  );
}
