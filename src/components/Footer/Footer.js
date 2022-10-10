import React from "react";
import "./Footer.css";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import paypal from "../../assets/paypal.png";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import apple from "../../assets/apple.png";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="follow-div">
        <p className="follow-us">FOLLOW US</p>
        <img src={facebook} className="social-logo" />
        <img src={twitter} className="social-logo" />
        <img src={instagram} className="social-logo" />
      </div>
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
      <div className="payment">
        <img className="paymentLogo" src={paypal} />
        <img className="paymentLogo" src={mastercard} />
        <img className="paymentLogo" src={visa} />
        <img className="paymentLogo" src={apple} />
      </div>
    </div>
  );
};

export default Footer;
