import React, {Component} from 'react';
import {BrowserRouter as Route, NavLink} from "react-router-dom";

import Icon from '../Icon';

import './style.scss';

class Item extends Component {

  constructor(props) {
    super(props);
    this.href = props.href;
    this.iconClass = props.iconClass;
    this.title = props.title;
  }

  render() {
    return (<li>
      <NavLink exact to={this.href} className='sidebar-links' activeClassName='active'>
        <div>
          <Icon iconClass={this.iconClass}/>
        </div>
      </NavLink>
    </li>)
  }
}

export default Item;
