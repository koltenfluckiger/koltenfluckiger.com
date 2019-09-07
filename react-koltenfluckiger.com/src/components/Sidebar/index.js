import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Projects from '../Projects';
import About from '../About';
import Contact from '../Contact';

import Avatar from './Avatar';
import Menu from './Menu';
import Item from './Item';
import Divider from './Divider';
import ExternalItem from './ExternalItem';

import interallinks from './internal-config';
import externallinks from './external-config';
import './style.scss';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isExtended: false
    };
  }

  extendSidebar = () => {
    console.log(this.state.isExtended);
    this.state.isExtended = !this.state.isExtended;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('This was called');
    if (this.state.isExtended !== prevState.state.isExtended) {
      this.setState(this.state.isExtended);
    }
  }

  render() {
    return (<Router>
      <div className={this.isExtended
          ? 'sidebar-extended'
          : 'sidebar'}>
        <Avatar/>
        <ul className='sidebar-items'>
          <Menu iconClass='fas sidebar-icon fa-bars' extendSidebar={this.extendSidebar}/>
          {interallinks.map((link) => (
            <Item key={link.key} href={link.href} iconClass={link.iconClass} title={link.title}/>
          ))}
          <Divider />
          {externallinks.map((link) => (
            <ExternalItem key={link.key} href={link.href} iconClass={link.iconClass} title={link.title}/>
          ))}
        </ul>
      </div>
      <Route path="/" exact component={Projects}/>
      <Route path="/about/" exact component={About}/>
      <Route path="/contact/" exact component={Contact}/>
    </Router>)
  }
}

export default Sidebar;
