import React, {Component} from "react";
import {Icon, Ul, Li} from "../../../../../common";

import ClassMapper from "sass-css-modules-class-mapper";

import styles from "./skill.module.css";

class Skill extends React.PureComponent {

  constructor(props) {
    super(props);
    this.title = props.title;
    this.subSkills = props.subSkills;
    this.variant = ClassMapper.map(styles, props.variant);
    this.abbreviation = props.abbreviation;
    this.onClick = props.onClick;
  }

  render() {
    return (<div onClick={() => this.onClick(this)} className={ClassMapper.map(styles, {classes: "skill-container"})}>
      <div className={this.variant}>{this.abbreviation}</div>
      <h6>{this.title}</h6>
      <Ul>
        {
          this.subSkills.map(subSkill => <Li key={subSkill._id}>
            {subSkill.title}
          </Li>)
        }
      </Ul>
    </div>)
  }
}

export default Skill;
