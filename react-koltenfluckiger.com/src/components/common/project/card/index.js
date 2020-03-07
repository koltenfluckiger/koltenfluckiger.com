import React, {Component, Fragment} from "react";
import {BrowserRouter as Route, Link} from "react-router-dom";
import {withRouter} from "react-router";
import PropTypes from "prop-types";

import Li from "../../li";
import Ul from "../../ul";

import Admin from "./admin";

import styles from "./card.module.css";

class Card extends React.PureComponent {

  constructor(props) {
    super(props);
    this.title = props.title;
    this.iconURL = props.iconURL;
    this.subSkills = props.subSkills;
    this.date = props.date;
    this._id = props._id;
    this.searchTags = props.searchTags;
    this.admin = props.admin;
    this.onClick = props.onClick;
  }

  render() {
    return (<Li>
      <Link to={`/project/${this._id}`}>
        <div className={styles.projectContainer}>
          <img alt={this.title} src={this.iconURL} className={styles.projectIcon}/>
          <div className={styles.projectDetailsContainer}>
            <h5 className={styles.projectTitle}>{this.title}</h5>
            <div className={styles.projectSkills}>
              <Ul>
                {
                  this.subSkills.slice(0, 4).map(subskill => {
                    return <Li key={subskill._id} variant={{classes: "list-left skill-list"}}>
                      <p>{subskill.title}</p>
                    </Li>
                  })
                }
              </Ul>
            </div>
          </div>
          <div className={styles.projectDateContainer}>
            <p className={styles.projectDate}>{this.date}</p>
          </div>
        </div>
      </Link>
    </Li>)
  }
}
Card.Admin = Admin;
export default withRouter(Card);
