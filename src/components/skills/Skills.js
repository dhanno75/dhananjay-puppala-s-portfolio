import React from "react";
import "./skills.css";
import { tool } from "../../data";

const Skills = () => {
  return (
    <div className="s" id="skills">
      <h1 className="s-name">Skills & Tools</h1>
      <div className="s-cards">
        {tool.map((el, i) => (
          <div className="s-card" key={i}>
            <img src={el.img} alt="" className="s-img" />
            <h3 className="s-img-name">{el.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
