import React, {Component} from 'react';
import {withRouter} from "react-router";
import Project from './Project';
import PropTypes from 'prop-types';
import ApiHandler from '../../../../utils/apihandler';

import './style.scss';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async deleteProject(id) {
    try {
    await ApiHandler.delete("/projects", {params: {id: id}});
    this.props.history.push(this.props.location.pathname);
  } catch(err) {
    console.log(err);
    }
  }

  async handleSubmit(e) {
    e.preventDefault();

    const myForm = document.getElementById('new-project-form');
    const formData = new FormData(myForm);

    try {
      const results = await ApiHandler.post("/projects", formData, "multiForm");
      if (results.status === 200){
        this.props.history.push(this.props.location.pathname);
      }
    } catch (err) {
      console.log(err);
    }
  }

async componentDidMount(){
    try {
    const projects = await ApiHandler.get('/projects', "json");
    this.setState({loading: false, projects: projects.data});
  } catch(err) {
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
              {this.state.loading ? "" : this.state.projects.map(project => (
                <Project key={project.title} title={project.title} screenshotIconRef={project.images.iconURL} skills={project.skills} date={project.date} id={project._id} deleteProject={this.deleteProject}/>
              ))}
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
                <input className='form-control' required="required" name="title" autoComplete='off' type='text'  placeholder='Title'/>
                <input className='form-control' required="required" name="skills[]" autoComplete='off' type='text'  placeholder='Skills'/>
              </div>
              <div className='admin-form-group'>
                <textarea className='form-control' required="required" name="description" type='text'  placeholder='Description'/>
              </div>
              <div className='admin-form-group'>
                <input className='form-control' required="required" name="sourceCodeLink" autoComplete='off' type='text'  placeholder='Source Code Link'/>
              </div>
              <div className='admin-form-group'>
                <input className='form-control' required="required" name="hostedLink" autoComplete='off' type='text'  placeholder='Hosted Link'/>
                <input className='form-control' required="required" name="hostedStatus" autoComplete='off' type='text'  placeholder="Currently Live"/>
              </div>
              <div className='admin-form-group'>
                <input className='form-control' required="required" name="searchTags" autoComplete='off' type='text'  placeholder='Search Tags'/>
              </div>
              <div className='admin-form-group'>
                <input type="file" id="icon" required="required" name="icon" accept="image/*" />
                <label className='form-control' htmlFor="icon">Choose an icon...</label>
                <input type="file" id="media" multiple="multiple" required="required" name="mediaFiles" accept="image/*" />
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
