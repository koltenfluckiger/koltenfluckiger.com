import React, {Component} from 'react';
import Ul from "../../ul";
import Li from "../../li";
import PropTypes from 'prop-types';

import styles from "./project-skills.module.css";

class ProjectSkills extends React.PureComponent {

  constructor(props) {
    super(props);
    this.subskills = props.subskills;
  }

  render() {
    return (<div className={styles.container}>
      <Ul>
        {
          this.subskills.map(skill => {
            return <Li key={skill._id} variant={{classes: "list-left skill-list"}}>{skill.title}</Li>
          })
        }
      </Ul>
    </div>)
  }
}

export default ProjectSkills;
