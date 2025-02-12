import React from "react";
import "./Navbar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>MovieManiac</h1>
        <div className="navbar_links">
          <a href="#popular">
            Popular
            <img src={Fire} alt="fire emoji" className="navbar_emoji"></img>
          </a>
          <a href="#top_rated">
            Top Rated
            <img src={Star} alt="star emoji" className="navbar_emoji"></img>
          </a>
          <a href="#upcoming">
            Upcoming
            <img src={Party} alt="party emoji" className="navbar_emoji"></img>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
