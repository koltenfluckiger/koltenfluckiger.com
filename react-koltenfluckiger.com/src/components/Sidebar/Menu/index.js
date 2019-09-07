import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Icon from '../Icon';

import './style.scss';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.iconClass = props.iconClass;
    this.extendSidebar = props.extendSidebar;
    this.extendSidebar = this.extendSidebar.bind(this);
  }

  render() {
    return (<li>
      <a onClick={this.extendSidebar} className='sidebar-links'>
        <div>
          <Icon iconClass={this.iconClass}/>
        </div>
      </a>
    </li>)
  }
}

export default Menu;
