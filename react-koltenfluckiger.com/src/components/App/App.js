import React, {Component} from 'react';

import Sidebar from '../Sidebar';

import './style.scss';

class App extends Component {

  render() {
    return (
      <div className='app-container'>
      <Sidebar/>
      </div>
    )
  }
}

export default App;
