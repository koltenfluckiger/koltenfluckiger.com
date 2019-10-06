import React, {Component} from 'react';
import {BrowserRouter as Route, Link} from "react-router-dom";
import {withRouter} from "react-router";
import PropTypes from 'prop-types';

import './style.scss';

class Project extends Component {

  static propTypes = {
    title: PropTypes.string,
    screenshotIconRef: PropTypes.string,
    frameworks: PropTypes.array,
    date: PropTypes.string,
    id: PropTypes.number,
    deleteProject: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.title = props.title;
    this.screenshotIconRef = props.screenshotIconRef
    this.frameworks = props.frameworks;
    this.date = props.date;
    this.id = props.id;
    this.deleteProject = props.deleteProject.bind(this);
  }

  render() {
    return (<li>
      <div className="admin-project-container">
        <img alt={this.title} src={this.screenshotIconRef} className="admin-project-screenshot-icon"/>
        <div className="admin-project-details-container">
          <h5 className="admin-project-title">{this.title}</h5>
          <div className="admin-project-frameworks">
            <p>{this.frameworks}</p>
          </div>
        </div>
        <div className="admin-project-date-container">
          <p className="admin-project-date">{this.date}</p>
        </div>
        <div className='admin-project-edit-options-container'>
          <Link to={`${this.props.match.path}/${this.id}`}>
            <i className="fas fa-pen-square"></i>
          </Link>
          <i onClick={this.deleteProject} className="fas fa-fw fa-times"></i>
        </div>
      </div>
    </li>)
  }
}

export default withRouter(Project);