import React, {Component} from "react";

import Title from "../Title";
import Skill from "./Skill";

import Skillss from "./config"

import "./style.scss";

class Skills extends Component {

  render() {
    return (<div className="skills-container">
      <Title text="Skills"/>
      <div className="skills-card-container">
        <div className="skills-card-subtitle-container">
          <h6>Click to see the corresponding projects</h6>
        </div>
        <div className="skills-skill-container">
          {Skillss.map((skill) => (
            <Skill key={skill.key} title={skill.title} subskills={skill.subskills} variant={skill.variant} abbreviation={skill.abbreviation} />
          ))}
        </div>
      </div>
    </div>)
  }
}

export default Skills;
