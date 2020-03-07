import React, {Component} from 'react';
import {withChildren} from "../../../higher-order-components";

import styles from "./project.module.css";

import Buttons from "./buttons";
import Card from "./card";
import Date from "./date";
import Description from "./description";
import Information from "./information";
import Media from "./media";
import Skills from "./skills";
import Title from "./title";

const Project = withChildren(class extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div></div>
    )
  }
}
)
Project.Buttons = Buttons;
Project.Card = Card;
Project.Date = Date;
Project.Description = Description;
Project.Information = Information;
Project.Media = Media;
Project.Skills = Skills;
Project.Title = Title;

export default Project;
