import React, {Component} from "react";
import {BrowserRouter as Route, Link} from "react-router-dom";
import PropTypes from "prop-types";

import "./style.scss";

class Project extends Component {

  static propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    screenshotIconRef: PropTypes.string,
    skills: PropTypes.array,
    date: PropTypes.string,
    id: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.href = props.href;
    this.title = props.title;
    this.screenshotIconRef = props.screenshotIconRef
    this.skills = props.skills;
    this.date = props.date;
    this.id = props.id;
  }

  render() {
    return (<Link to={`/`}>
      <div className="project-container">
        <img alt={this.title} src={this.screenshotIconRef} className="project-screenshot-icon"/>
        <div className="project-details-container">
          <h5 className="project-title">{this.title}</h5>
          <div className="project-skills">
            <p>{
                this.skills.map(skill => {
                  return " " + skill + " "
              })
            }</p>
          </div>
        </div>
        <div className="project-date-container">
          <p className="project-date">{this.date}</p>
        </div>
      </div>
    </Link>)
  }
}

export default Project;
