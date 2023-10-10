import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <Link className="link" to={"http://google.com"}>
            <li className="menuItem">Learn More</li>
          </Link>
          <Link className="link" to={"http://google.com"}>
            <li className="menuItem">Source Code</li>
          </Link>
          <Link className="link" to={"http://google.com"}>
            <li className="menuItem">About</li>
          </Link>
          <Link className="link" to={"http://google.com"}>
            <li className="menuItem">LinkedIn</li>
          </Link>
        </ul>
        <div className="infoText">
          Critique is a website that helps you find the right movie or TV Show to binge watch with your friends and family. Explore the majestic collection of popular movies and tv shows on Critique to find your next masterpiece.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;