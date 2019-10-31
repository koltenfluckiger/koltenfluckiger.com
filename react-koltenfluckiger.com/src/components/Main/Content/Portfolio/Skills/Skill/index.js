import React, {Component} from "react";
import {Icon} from "../../../../../common";

import PropTypes from "prop-types";

import "./style.scss";

class Skill extends Component {

  static propTypes = {
    title: PropTypes.string,
    subSkills: PropTypes.array,
    variant: PropTypes.string,
    abbreviation: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.title = props.title;
    this.subSkills = props.subSkills;
    this.variant = props.variant;
    this.abbreviation = props.abbreviation;
  }

  render() {
    return (<div className="skill-container">
      <div className="skill-circle blue-circle">{this.abbreviation}</div>
      <h6>{this.title}</h6>
      <ul>
        {
          this.subSkills.map((subSkill) => <li key={subSkill._id}>
            {subSkill.title}
          </li>)
        }
      </ul>
    </div>)
  }
}

export default Skill;
