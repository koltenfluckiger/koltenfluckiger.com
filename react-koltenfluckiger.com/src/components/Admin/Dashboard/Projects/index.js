import React, {Component} from 'react';
import {withRouter} from "react-router";
import Project from './Project';
import PropTypes from 'prop-types';
import ApiHandler from '../../../../utils/apihandler';

import './style.scss';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  deleteProject(project) {
    prompt('Are you sure you want to delete this project?');
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'file'
      ? target.files
      : target.value;
    const name = target.name;
    this.setState({
      [name]: {
        type: target.type,
        value: value
      }
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    var newForm = new FormData();
    const myForm = document.getElementById('new-project-form');
    const formData = new FormData(myForm);
    for (var pair of formData.entries()){
      console.log(pair);
    }


    try {
      await ApiHandler.post("/projects", formData, "multiForm");
    } catch (err) {
      console.log(err);
    }

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
            <form id="new-project-form" onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
              <div className='admin-form-group'>
                <input className='form-control' name="title" autoComplete='off' type='text' onChange={this.handleInputChange} placeholder='Title'/>
                <input className='form-control' name="skills" autoComplete='off' type='text' onChange={this.handleInputChange} placeholder='Skills'/>
              </div>
              <div className='admin-form-group'>
                <textarea className='form-control' name="description" type='text' onChange={this.handleInputChange} placeholder='Description'/>
              </div>
              <div className='admin-form-group'>
                <input className='form-control' name="date" autoComplete='off' type='date' onChange={this.handleInputChange} placeholder='Date'/>
                <input className='form-control' name="sourceCodeLink" autoComplete='off' type='text' onChange={this.handleInputChange} placeholder='Source Code Link'/>
              </div>
              <div className='admin-form-group'>
                <input className='form-control' name="hostedLink" autoComplete='off' type='text' onChange={this.handleInputChange} placeholder='Hosted Link'/>
                <input className='form-control' name="hostedStatus" autoComplete='off' type='text' onChange={this.handleInputChange} placeholder="Currently Live"/>
              </div>
              <div className='admin-form-group'>
                <input className='form-control' name="searchTags" autoComplete='off' type='text' onChange={this.handleInputChange} placeholder='Search Tags'/>
              </div>
              <div className='admin-form-group'>
                <input type="file" id="icon" name="icon" accept="image/*" onChange={this.handleInputChange}/>
                <label className='form-control' htmlFor="icon">Choose an icon...</label>
                <input type="file" id="media" multiple="multiple" name="mediaFiles" accept="image/*" onChange={this.handleInputChange}/>
                <label className='form-control' multiple="multiple" htmlFor="media">Choose media...</label>
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
