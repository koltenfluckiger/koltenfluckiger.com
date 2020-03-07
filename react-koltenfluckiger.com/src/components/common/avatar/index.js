import React, {Component} from "react";
import {BrowserRouter as Route, Link} from "react-router-dom";

import AvatarSource from "../../../static/avatar-config";

import styles from "./avatar.module.css";

class Avatar extends React.PureComponent {

  render() {
    return (<Link to="/about">
      <div className={styles.avatarContainer}>
        <img alt="avatar" className={styles.avatarPicture} src={AvatarSource}/>
        <h3>Kolten's
          <br/>
          Portfolio</h3>
      </div>
    </Link>)
  }
}

export default Avatar;
