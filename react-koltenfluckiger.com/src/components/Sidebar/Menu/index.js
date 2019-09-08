import React, {Component} from 'react';

import Icon from '../Icon';

import './style.scss';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.variant = props.variant;
    this.extendSidebar = props.extendSidebar;
    this.extendSidebar = this.extendSidebar.bind(this);
  }

  render() {
    return (<li>
      <a onClick={this.extendSidebar} className='sidebar-links'>
        <div>
          <Icon variant={this.variant}/>
        </div>
      </a>
    </li>)
  }
}

export default Menu;
