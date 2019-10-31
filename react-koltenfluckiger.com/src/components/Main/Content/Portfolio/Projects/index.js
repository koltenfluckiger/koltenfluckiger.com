import React, {Component} from "react";
import {Title} from "../../../../common";

import ApiHandler from '../../../../../utils/api-handler';
import SearchBar from "./search-bar";
import Project from "./project";

import "./style.scss";

class Projects extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      projects: []
    }
  }

  render() {
    return (<div className="projects-container">
      <Title text="Projects"/>
      <SearchBar/>
      {
        this.state.loading
          ? ""
          : this.state.projects.map(project => (<Project key={project.title} title={project.title} id={project._id} screenshotIconRef={project.screenshotIconRef} skills={project.skills.subskills}/>))
      }
      <Project title='This Portfolio' screenshotIconRef='/images/portfolio-screenshot.png' skills={['HTML', 'CSS', 'Javascript', 'React']} date="Sept 18th 2019" id={1}/>
    </div>)
  }
}

export default Projects;
