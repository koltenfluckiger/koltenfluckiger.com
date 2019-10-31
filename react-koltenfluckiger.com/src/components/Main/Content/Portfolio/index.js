import React, {Component} from "react";

import Projects from "./projects";
import Skills from "./skills";

import "./style.scss";

class Portfolio extends Component {

  render() {
    return (
      <div className="portfolio-container">
        <div className="projects-skills-container">
          <Projects />
          <Skills />
        </div>
      </div>
    )
  }
}

export default Portfolio;
