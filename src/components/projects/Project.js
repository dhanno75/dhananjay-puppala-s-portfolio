import React from "react";
import "./project.css";
import Project0 from "../../images/p0.png";
import Project1 from "../../images/p1.png";
import Project2 from "../../images/p2.png";
import Projec3 from "../../images/p3.jpeg";
import Projec4 from "../../images/p4.png";
import Carousel from "react-bootstrap/Carousel";
import { MdOutlineComputer } from "react-icons/md";

const projects = [
  {
    id: "1",
    image: `${Project0}`,
    link: "https://shiny-cuchufli-520247.netlify.app/",
    frontEnd: "https://github.com/dhanno75/WebCode1-MakeupAPI",
    backEnd: "",
    about:
      "A simple bulk email tool created using NodeJS, Express, MongoDB, Redux and React. The website is built from scratch to send emails in quantities",
  },
  {
    id: "2",
    image: `${Project1}`,
    link: "https://the-bulk-email-sender.vercel.app/",
    frontEnd: "https://github.com/dhanno75/bulk-email-tool-frontend",
    backEnd: "https://github.com/dhanno75/bulk-email-tool-backend",
    about:
      "A simple bulk email tool created using NodeJS, Express, MongoDB, Redux and React. The website is built from scratch to send emails in quantities",
  },
  {
    id: "3",
    image: `${Project2}`,
    link: "https://tasks-app-frontent.vercel.app/",
    frontEnd: "https://github.com/dhanno75/tasks_app_frontent",
    backEnd: "https://github.com/dhanno75/tasks_app_backend",
    about:
      "A Todo list app specially built to keep track of errands or tasks that need to be done. It is built with complete user authentication. Tech stack used is NodeJS, Express, MongoDB, Redux, React.",
  },
  {
    id: "4",
    image: `${Projec3}`,
    link: "https://web-code2-client.vercel.app/login",
    frontEnd: "https://github.com/dhanno75/WebCode2-client",
    backEnd: "https://github.com/dhanno75/WebCode2-server",
    about:
      "A CRM application, built with complete user authentication and user roles. Tech stack used is NodeJS, Express, MongoDB, Redux, React.",
  },
  {
    id: "5",
    image: `${Projec4}`,
    link: "https://directions-dhananjay.netlify.app/",
    frontEnd: "https://github.com/dhanno75/google-maps-direction",
    about:
      "A directions app to display directions, distance and duration using Google Maps API.",
  },
];

const Project = () => {
  return (
    <div className="p" id="projects">
      <h1 className="p-title">Projects</h1>
      <div className="p-list">
        <Carousel data-bs-theme="dark">
          {projects.map((project) => (
            <Carousel.Item>
              <a href={`${project.link}`} target="_blank" rel="noreferrer">
                <img
                  className="d-block w-100"
                  src={project.image}
                  alt="First slide"
                />
              </a>
              <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
                <div className="captions-wrapper">
                  <div className="caps">
                    <a
                      href={`${project.link}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MdOutlineComputer className="icon" />
                    </a>
                    <a
                      href={`${project.frontEnd}`}
                      target="_blank"
                      rel="noreferrer"
                      className="frontback"
                      style={{
                        color:
                          project.id === "1" || project.id === "5"
                            ? "black"
                            : "white",
                      }}
                    >
                      Frontend
                    </a>
                    {project.id === "1" || project.id === "5" ? (
                      ""
                    ) : (
                      <a
                        href={`${project.backEnd}`}
                        target="_blank"
                        rel="noreferrer"
                        className="frontback"
                        id="backend"
                      >
                        Backend
                      </a>
                    )}
                  </div>
                  <div
                    className="about"
                    style={{ color: project.id === "1" ? "white" : "black" }}
                  >
                    {project.about}
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
