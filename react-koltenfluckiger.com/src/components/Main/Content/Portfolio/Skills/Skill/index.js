import React, {Component} from "react";
import PropTypes from "prop-types";

import Icon from "./Icon";

import "./style.scss";

class Skill extends Component {

  static propTypes = {
    title: PropTypes.string,
    subskills: PropTypes.array,
    variant: PropTypes.string,
    abbreviation: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.title = props.title;
    this.subskills = props.subskills;
    this.variant = props.variant;
    this.abbreviation = props.abbreviation;
  }

  render() {
    return (
      <div className="skill-container">
      <Icon variant={this.variant} abbreviation={this.abbreviation} />
      <h6>{this.title}</h6>
      <ul>
        {this.subskills.map((subskill) =>
          <li key={subskill}>
            {subskill}
          </li>
        )}
      </ul>
    </div>
      )
  }
}

export default Skill;
