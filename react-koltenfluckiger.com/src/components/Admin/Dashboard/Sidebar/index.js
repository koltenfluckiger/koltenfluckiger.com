import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { withRouter } from "react-router";
import InternalLink from '../../../Main/Sidebar/InternalLink';

import './style.scss';

class Sidebar extends Component {

  render() {
    return (<div className='admin-sidebar'>
      <ul>
        <InternalLink href='/admin/dashboard/projects' variant='sidebar-icon fas fa-project-diagram'/>
        <InternalLink href='/admin/dashboard/skills' variant='sidebar-icon fas fa-box-open'/>
      </ul>
    </div>)
  }
}

export default Sidebar;
