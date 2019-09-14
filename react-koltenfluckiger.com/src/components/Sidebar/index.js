import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PropTypes from 'prop-types';

import Portfolio from '../Portfolio';
import About from '../About';
import Contact from '../Contact';
import Error from '../Error';

import Avatar from './Avatar';
import Menu from './Menu';
import Item from './Item';
import Divider from './Divider';
import ExternalItem from './ExternalItem';

import InternalLinks from '../../static/links-internal-config';
import ExternalLinks from '../../static/links-external-config';
import './style.scss';

class Sidebar extends Component {

  static propTypes = {
    state: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      isExtended: false,
    };
  }

  extendSidebar = () => {
    this.setState({
      isExtended: !this.state.isExtended
    });
  }

  render() {
    return (<Router>
      <div className='sidebar-container'>
        <div className={this.state.isExtended
            ? 'sidebar-extended'
            : 'sidebar'}>
          <Avatar/>
          <ul className='sidebar-items'>
            <Menu variant='fas sidebar-icon fa-bars' extendSidebar={this.extendSidebar}/> {InternalLinks.map((link) => (<Item key={link.key} href={link.href} variant={link.variant} title={link.title}/>))}
            <Divider/> {ExternalLinks.map((link) => (<ExternalItem key={link.key} href={link.href} variant={link.variant} title={link.title}/>))}
          </ul>
        </div>
      </div>
      <Switch>
      <Route path="/" exact component={Portfolio}/>
      <Route path="/about" exact component={About}/>
      <Route path="/contact" exact component={Contact}/>
      <Route component={Error} />
      </Switch>
    </Router>
  )
  }
}

export default Sidebar;
