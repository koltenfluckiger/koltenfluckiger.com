import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import './style.scss';

class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='admin-sidebar'></div>
    )
  }
}

export default Sidebar;
