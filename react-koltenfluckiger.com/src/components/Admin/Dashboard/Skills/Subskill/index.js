import React, {Component} from 'react';
import {BrowserRouter as Route, Link} from "react-router-dom";
import {withRouter} from "react-router";
import PropTypes from 'prop-types';

class Subskill extends Component {

  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    deleteSubSkill: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.title = props.title;
    this.id = props.id;
    this.deleteSubSkill = props.deleteSubSkill.bind(this);
  }

  render() {
    return (<li className="admin-li-skill-container">
      <Link to={`${this.props.match.path}/${this.title}`}>
        <div className="admin-skill-container">
          <span className="admin-skill-title-action">
            {this.title}
          </span>
        </div>
      </Link>
      <button className="skills-delete-action">
        <i onClick={() => this.deleteSubSkill(this.id)} className="fas fa-fw fa-times"></i>
      </button>
    </li>)
  }
}

export default withRouter(Subskill);
