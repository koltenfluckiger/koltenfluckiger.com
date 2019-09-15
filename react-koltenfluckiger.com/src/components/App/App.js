import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './Main';
import Admin from './Admin';
import Error from '../Routing/Error';

import './style.scss';

class App extends Component {

  render() {
    return (<div className='app'>
      <Router>
        <Route path="/" exact component={Main}/>
        <Route path="/admin" component={Admin}/>
      </Router>
    </div>)
  }
}

export default App;
