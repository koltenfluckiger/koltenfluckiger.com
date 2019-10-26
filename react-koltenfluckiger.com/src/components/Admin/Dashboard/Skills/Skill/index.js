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
    return (<li className="admin-li-skill-container">
      <Link to={`${this.props.match.path}/${this.title}`}>
        <div className="admin-skill-container">
          <span className="admin-skill-title-action">
            <b>{this.title}</b>
          </span>
          <div className="fading-seperator"></div>
          <ul className="skill-subskill-ul-container">
            {this.subSkills.map(skill => <li key={skill.title} className="skill-subskill-li-container">{skill.title}</li>)}
          </ul>
        </div>
      </Link>
      <button className="skills-delete-action">
        <i onClick={() => this.deleteSkill(this.id)} className="fas fa-fw fa-times"></i>
      </button>
    </li>)
  }
}

export default withRouter(Skill);
