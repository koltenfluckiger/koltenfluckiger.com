import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import './style.scss';

class Menu extends Component {

  static propTypes = {
    variant: PropTypes.string,
    extendSidebar: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.variant = props.variant;
    this.extendSidebar = props.extendSidebar;
    this.extendSidebar = this.extendSidebar.bind(this);
  }

  render() {
    return (<li>
      <a onClick={this.extendSidebar} style={{cursor: 'pointer'}} className='sidebar-links'>
        <div>
          <Icon variant={this.variant}/>
        </div>
      </a>
    </li>)
  }
}

export default Menu;
