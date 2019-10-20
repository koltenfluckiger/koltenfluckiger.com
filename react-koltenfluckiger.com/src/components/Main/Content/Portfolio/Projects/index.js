import React, {Component} from "react";

import Title from "../Title";
import SearchBar from "./SearchBar";
import Project from "./Project";

import "./style.scss";

class Projects extends Component {

  render() {
    return (<div className="projects-container">
      <Title text="Projects"/>
      <SearchBar/>
      <Project title='This Portfolio' screenshotIconRef='/images/portfolio-screenshot.png' skills={['HTML', 'CSS', 'Javascript', 'React']} date="Sept 18th 2019" id={1}/>
    </div>)
  }
}

export default Projects;
