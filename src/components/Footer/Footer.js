import React from "react";
import "./Footer.css";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="footer-div">
      <div className="follow-div">
        <p className="follow-us">FOLLOW US</p>
        <img src={facebook} className="social-logo" />
        <img src={twitter} className="social-logo" />
        <img src={instagram} className="social-logo" />
      </div>
      <div className="about">
        <div className="about-us">
          <ul className="about-list">
            <li>About us</li>
            <li>News</li>
            <li>Our Investors</li>
            <li>Partners</li>
            <li>Corporate</li>
          </ul>
          <ul className="about-list">
            <li>FAQ</li>
            <li>Terms and Condition</li>
            <li>Help Center</li>
            <li>Careers</li>
            <li>Resources</li>
          </ul>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
