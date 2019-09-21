import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './Main';
import Admin from './Admin';

import './style.scss';

class App extends Component {

  render() {
    return (<div className='app'>
      <Router>
        <Route path="/" component={Main}/>
        <Route path="/admin" component={Admin}/>
      </Router>
    </div>)
  }
}

export default App;
