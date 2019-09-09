import React, {Component} from 'react';

import Title from '../Title';
import SearchBar from './SearchBar';

import './style.scss';

class Projects extends Component {

  render() {
    return (<div className='projects-container'>
      <Title text='Projects'/>
      <SearchBar />
    </div>)
  }
}

export default Projects;
