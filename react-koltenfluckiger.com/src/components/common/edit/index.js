import React, {Component} from 'react';
import {
  Button,
  Card,
  FileInput,
  Form,
  FormGroup,
  Icon,
  Input,
  Label,
  Panel,
  Tagger,
  TextArea
} from "../";
import {withChildren} from "../../../higher-order-components";

import Project from "./project";
import Skill from "./skill";
import SubSkill from "./subskill";

import styles from "./edit-popup.module.css";

const Edit = withChildren(class extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>{this.props.render}</div>
    )
  }
}
)
Edit.Project = Project
Edit.Skill = Skill;
Edit.SubSkill = SubSkill;

export default Edit;
