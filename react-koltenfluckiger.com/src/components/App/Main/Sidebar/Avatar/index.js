import React, {Component} from "react";
import {BrowserRouter as Route, Link} from "react-router-dom";

import AvatarSource from "../../../../../static/avatar-config";
import "./style.scss";

class Avatar extends Component {

  render() {
    return (<Link to="/about">
      <div className="avatar-container">
        <img alt="avatar" className="avatar-picture" src={AvatarSource}/>
        <h3>Kolten"s
          <br/>
          Portfolio</h3>
      </div>
    </Link>)
  }
}

export default Avatar;
