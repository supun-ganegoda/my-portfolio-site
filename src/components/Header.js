import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        SU<span>pu</span>
        n..
      </div>
      <ul className="navlist">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#interests">Interests</a>
        </li>
        <li>
          <a href="#portpolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
      <div className="menu-icon">
        <i className="bx bx-menu"></i>
      </div>
    </div>
  );
};
export default Header;
