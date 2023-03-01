import React, { useState } from "react";
// import LogoWhite from "../../images/w.png";
import LogoBlack from "../../images/b.png";
import "./navigation.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="nav">
      <div className="nav-icon">
        <img src={LogoBlack} alt="" className="nav-img" />
      </div>
      <div className={showMenu ? "nav-links phone-nav-links" : "nav-links"}>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#professional" className="nav-link">
          Professional
        </a>
        {/* <a href="#achievements" className="nav-link">
          Achievements
        </a> */}
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </div>
      <div className="nav-hamburger-menu">
        <a href="#a" onClick={() => setShowMenu(!showMenu)}>
          <GiHamburgerMenu className="burger" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
