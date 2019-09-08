import React, {Component} from 'react';
import {BrowserRouter as Route, NavLink} from "react-router-dom";

import Icon from '../Icon';

import './style.scss';

class ExternalItem extends Component {

  constructor(props) {
    super(props);
    this.href = props.href;
    this.variant = props.variant;
    this.title = props.title;
  }

  render() {
    return (<li>
      <a href={this.href} className='sidebar-links'>
        <div>
          <Icon variant={this.variant}/>
        </div>
      </a>
    </li>)
  }
}

export default ExternalItem;
