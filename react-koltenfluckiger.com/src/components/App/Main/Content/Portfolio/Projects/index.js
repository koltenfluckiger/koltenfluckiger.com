import React, {Component} from 'react';

import Title from '../Title';
import SearchBar from './SearchBar';
import Project from './Project';

import './style.scss';

class Projects extends Component {

  render() {
    return (<div className='projects-container'>
      <Title text='Projects'/>
      <SearchBar/>
      <Project />
    </div>)
  }
}

export default Projects;
