import React from "react";
import "./about.css";
// import AboutImg from "../../images/about.jpeg";
import AboutImg from "../../images/about-1.png";

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
      </div>
    </div>
  );
};

export default About;
