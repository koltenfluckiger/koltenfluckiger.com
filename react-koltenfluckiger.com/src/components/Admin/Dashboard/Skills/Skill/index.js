import React, {Component} from 'react';
import {BrowserRouter as Route, Link} from "react-router-dom";
import {withRouter} from "react-router";
import PropTypes from 'prop-types';

import './style.scss';

class Skill extends Component {

  static propTypes = {
    title: PropTypes.string,
    subSkills: PropTypes.array,
    abbreviation: PropTypes.string,
    id: PropTypes.string,
    deleteSkill: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.title = props.title;
    this.subSkills = props.subSkills;
    this.abbreviation = props.abbreviation;
    this.id = props.id;
    this.deleteSkill = props.deleteSkill.bind(this);
  }

  render() {
    return (<li>
      <div className="skill-container">
        <div className="skill-circle">{this.abbreviation}</div>
      </div>
    </li>)
  }
}

export default withRouter(Skill);
