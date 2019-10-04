import React, {Component} from "react";

import Title from "../Title";
import Framework from "./Framework";

import Frameworks from "./config"

import "./style.scss";

class Skills extends Component {

  render() {
    return (<div className="skills-container">
      <Title text="Skills"/>
      <div className="skills-card-container">
        <div className="skills-card-subtitle-container">
          <h6>Click to see the corresponding projects</h6>
        </div>
        <div className="skills-framework-container">
          {Frameworks.map((framework) => (
            <Framework key={framework.key} title={framework.title} subframeworks={framework.subframeworks} variant={framework.variant} abbreviation={framework.abbreviation} />
          ))}
        </div>
      </div>
    </div>)
  }
}

export default Skills;
