import React, {Component} from 'react';
import {withRouter} from "react-router";
import Project from './Project';
import PropTypes from 'prop-types';

import './style.scss';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  deleteProject(project) {
    prompt('Are you sure you want to delete this project?');
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.title.value);
  }

  render() {
    return (<div className='admin-dashboard-projects-container'>
      <div className='admin-projects-list-form-container'>
        <div className='admin-projects-list-container'>
          <div className='admin-title-container'>
            <h2>Projects</h2>
          </div>
          <div className='admin-project-list'>
            <ul>
              <Project title='This Portfolio' screenshotIconRef='/images/portfolio-screenshot.png' frameworks={['HTML', 'CSS', 'Javascript', 'React']} date="Sept 18th 2019" id={1} deleteProject={this.deleteProject}/>
            </ul>
          </div>
        </div>
        <div className='admin-new-project-container'>
          <div className='admin-title-container'>
            <h2>New Project</h2>
          </div>
          <div className='admin-new-project-form-container'>
            <form id="new-project-form" onSubmit={this.handleSubmit} method="post">
              <div className='admin-form-group'>
                <input className='form-control' name="title" autoComplete='off' type='text' placeholder='Title'/>
                <input className='form-control' name="technologies"  autoComplete='off' type='text' placeholder='Technologies'/>
              </div>
              <div className='admin-form-group'>
                <textarea className='form-control' name="description"  type='text' placeholder='Description'/>
              </div>
              <div className='admin-form-group'>
                <input className='form-control' name="date" autoComplete='off' type='date' placeholder='Date'/>
                <input className='form-control' name="sourceCodeLink" autoComplete='off' type='text' placeholder='Source Code Link'/>
              </div>
              <div className='admin-form-group'>
                <input className='form-control' name="hostedLink" autoComplete='off' type='text' placeholder='Hosted Link'/>
                <input className='form-control' name="hostedStatus" autoComplete='off' type='text' placeholder='Hosted Status'/>
              </div>
              <div className='admin-form-group'>
                <input className='form-control' name="searchTags" autoComplete='off' type='text' placeholder='Search Tags'/>
              </div>
              <div className='admin-form-group'>
                <input type="file" id="icon" name="icon" accept="image/*"/>
                <label className='form-control' htmlFor="icon">Choose an icon...</label>
                <input type="file" id="media" name="media" multiple name="mediaFiles[]" accept="image/*"/>
                <label className='form-control' htmlFor="icon">Choose media...</label>
            </div>
            <div className='admin-form-group'>
          <button type="submit" className=" button-form-control button blue">Submit New Project</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>)
  }
}

export default withRouter(Projects);
