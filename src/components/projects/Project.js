import React from "react";
import "./project.css";
import Project1 from "../../images/pro1.png";
import Project2 from "../../images/pro2.png";

const Project = () => {
  return (
    <div className="p" id="projects">
      <h1 className="p-title">Projects</h1>
      <div className="p-list">
        <div className="p-card">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a
            href="https://react-task3-admin-dashboard.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Project1} alt="" className="p-img" />
          </a>
        </div>
        <div className="p-card">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a
            href="https://web-code2-client.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Project2} alt="" className="p-img" />
          </a>
        </div>
        <div className="p-card">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a href="#w" target="_blank" rel="noreferrer">
            <img src="" alt="" className="p-img" />
          </a>
        </div>
        <div className="p-card">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a href="#w" target="_blank" rel="noreferrer">
            <img src="" alt="" className="p-img" />
          </a>
        </div>
        <div className="p-card">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a href="#w" target="_blank" rel="noreferrer">
            <img src="" alt="" className="p-img" />
          </a>
        </div>
        <div className="p-card">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a href="#w" target="_blank" rel="noreferrer">
            <img src="" alt="" className="p-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
