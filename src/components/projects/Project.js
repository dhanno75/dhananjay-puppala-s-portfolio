import React from "react";
import "./project.css";
import Project0 from "../../images/p0.png";
import Project1 from "../../images/p1.png";
import Project2 from "../../images/p2.png";

const projects = [
  {
    id: "1",
    image: `${Project0}`,
    link: "https://shiny-cuchufli-520247.netlify.app/",
    frontEnd: "https://github.com/dhanno75/WebCode1-MakeupAPI",
    backEnd: "",
  },
  {
    id: "2",
    image: `${Project1}`,
    link: "https://the-bulk-email-sender.vercel.app/",
    frontEnd: "https://github.com/dhanno75/bulk-email-tool-frontend",
    backEnd: "https://github.com/dhanno75/bulk-email-tool-backend",
  },
  {
    id: "3",
    image: `${Project2}`,
    link: "https://tasks-app-frontent.vercel.app/about",
    frontEnd: "https://github.com/dhanno75/tasks_app_frontent",
    backEnd: "https://github.com/dhanno75/tasks_app_backend",
  },
];

const Project = () => {
  return (
    <div className="p" id="projects">
      <h1 className="p-title">Projects</h1>
      <div className="p-list">
        {projects.map((project) => (
          <div className="p-card" key={project.id}>
            <div className="p-browser">
              <div
                className="p-circle"
                style={{ backgroundColor: "rgb(216, 78, 78)" }}
              ></div>
              <div
                className="p-circle"
                style={{ backgroundColor: "rgb(200, 200, 33)" }}
              ></div>
              <div
                className="p-circle"
                style={{ backgroundColor: "rgb(38, 202, 38)" }}
              ></div>
            </div>
            <a href={`${project.link}`} target="_blank" rel="noreferrer">
              <img src={project.image} alt="" className="p-img" />
            </a>

            <div className="p-links">
              <div className="overlay">
                <a
                  href={`${project.frontEnd}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend
                </a>
                <a href={`${project.backEnd}`} target="_blank" rel="noreferrer">
                  Backend
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
