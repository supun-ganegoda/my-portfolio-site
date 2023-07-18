import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = (e) => {
    setMobileMenu(!mobileMenu);
  };

  const handleCloseMenu = (e) => {
    if (mobileMenu) {
      setMobileMenu(!mobileMenu);
    }
  };

  return (
    <div className="header">
      <div className="logo">
        SU<span>pu</span>
        n..
      </div>
      <ul className={mobileMenu ? "navlist-mobile" : "navlist"}>
        <li>
          <a href="#home" className="active" onClick={(e) => handleCloseMenu()}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleCloseMenu()}>
            About me
          </a>
        </li>
        <li>
          <a href="#interests" onClick={(e) => handleCloseMenu()}>
            Interests
          </a>
        </li>
        <li>
          <a href="#portpolio" onClick={(e) => handleCloseMenu()}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleCloseMenu()}>
            Contact me
          </a>
        </li>
      </ul>
      <div className="menu-icon">
        {mobileMenu ? (
          <i className="bx bx-x-circle" onClick={(e) => handleMobileMenu()}></i>
        ) : (
          <i className="bx bx-menu" onClick={(e) => handleMobileMenu()}></i>
        )}
      </div>
    </div>
  );
};
export default Header;
