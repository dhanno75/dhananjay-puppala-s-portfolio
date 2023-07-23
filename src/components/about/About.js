import React from "react";
import "./about.css";
// import AboutImg from "../../images/about.jpeg";
import AboutImg from "../../images/about-1.png";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import Profile from "../../images/profile.png";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card">
          <img src={AboutImg} alt="" className="a-img" />
        </div>
      </div>

      <div className="a-right">
        <h2 className="a-name">About me</h2>

        <p className="a-desc">
          My name is Puppala Dhananjay, I am aspiring Full Stack Web Developer
          and Web Designer and Computer Science student from India. I love
          working on new and exciting technologies emerging nowadays.
        </p>
        {/* <p className="a-desc">
          I have good work experience as a MERN Stack Developer in startup(s)
          and UI/UX Designer where I was core member of the development team and
          done quite some contribution to open source as well.
        </p> */}
        {/*<div className="line"></div>
                  <p className="social-name">Socials</p> */}
            <div className="socials">
              <div className="socials-wrapper">
                <a
                  className="socials-item"
                  href="https://github.com/dhanno75"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Github} alt="" className="socials-icon" />
                </a>
                <a
                  className="socials-item"
                  href="https://www.linkedin.com/in/dhananjay-p-4b164a19b/" target="_blank" rel="noreferrer"  >
                  <img src={Linkedin} alt="" className="socials-icon" />
                </a>
                <a
                  className="socials-item"
                  href="https://drive.google.com/file/d/117SPV5vbPZUSLFGkbilS5h05i1_g8zJl/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Profile} alt="" className="socials-icon" />
                </a>
              </div>
            </div>
      </div>
    </div>
  );
};

export default About;
