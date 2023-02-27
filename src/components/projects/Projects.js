import React from "react";
import "./projects.css";
import Pro1 from "../../images/pro1.png";

const Projects = () => {
  return (
    <div className="p" id="projects">
      <h1 className="p-title">Projects</h1>
      <div className="p-cards">
        <div className="p-card">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a href="#link" target="_blank" rel="noreferrer">
            <img
              src="https://images.unsplash.com/photo-1677321185756-b9708a22b90e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="p-img"
            />
          </a>
        </div>
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
            <img src={Pro1} alt="" className="p-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
