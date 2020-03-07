import React, {Component} from 'react';
import {BrowserRouter as Route, Link} from "react-router-dom";
import {withRouter} from "react-router";
import {
  Button,
  FadingSeperator,
  Icon,
  Li,
  Span,
  Ul
} from "../../../../common";

import ClassMapper from "sass-css-modules-class-mapper";
import PropTypes from 'prop-types';
import styles from "./skill.module.css";

class Skill extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string,
    subSkills: PropTypes.array,
    _id: PropTypes.number,
    onClick: PropTypes.func
  }

  render() {
    const {onClick, _id, title, subSkills, type} = this.props;
    return (<div onClick={() => onClick(type, _id)} className={styles.container}>
      <Span variant={{classes: "skill-span"}}>
        {title}
      </Span>
      <FadingSeperator/>
      <Ul>
        {
          subSkills.map(skill => <Li key={skill.title} variant={{classes: "skills-subskills-li"}}>
            <Span variant={{classes: "skill-subskill-span"}}>{skill.title}</Span>
          </Li>)
        }
      </Ul>
    </div>)
  }
}

export default withRouter(Skill);
