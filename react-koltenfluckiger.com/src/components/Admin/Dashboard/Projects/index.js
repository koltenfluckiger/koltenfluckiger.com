import React, {Component} from 'react';
import {withRouter} from "react-router";
import {ApiHandler} from '../../../../utils';
import {
  Button,
  Label,
  FileInput,
  Input,
  Tagger,
  Title
} from '../../../common';

import Project from './project';
import PropTypes from 'prop-types';

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
      await ApiHandler.delete("/projects", {filter : {id: id}});
      this.props.history.go(this.props.location.pathname);
    } catch (err) {
      console.log(err);
    }
  }

  async handleSubmit(e) {
    e.preventDefault();

    const myForm = document.getElementById('new-project-form');
    const formData = new FormData(myForm);

    try {
      const results = await ApiHandler.post("/projects", "multiForm", formData);
      if (results.status === 200) {
        this.props.history.go(this.props.location.pathname);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      const projects = await ApiHandler.get('/projects', "json");
      const subskills = await ApiHandler.get('/subskills', "json");
      this.setState({loading: false, projects: projects.data, subskills: subskills.data});
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (<div className='admin-dashboard-projects-container'>
      <div className='admin-projects-list-form-container'>
        <div className='admin-projects-list-container'>
          <Title text="Projects"/>
          <div className='admin-project-list'>
            <ul>
              {
                this.state.loading
                  ? ""
                  : this.state.projects.map(project => (<Project key={project.title} title={project.title} screenshotIconRef={project.images.iconURL} skills={project.skills} date={project.date} id={project._id} deleteProject={this.deleteProject}/>))
              }
            </ul>
          </div>
        </div>
        <div className='admin-new-project-container'>
          <Title text="New Project"/>
          <div className='admin-new-project-form-container'>
            <form id="new-project-form" onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
              <div className='admin-form-group'>
                <Input variant='form-control' required={true} name="title" autoComplete='off' type='text' placeholder='Title'/>
                <Tagger id="subskill-search-tags" variant="tagger-input" name="skills" placeholder='Skills' whiteListTags={this.state.subskills} options={{
                    allow_spaces: true,
                    onlyWhiteList: true
                  }}/>
              </div>
              <div className='admin-form-group'>
                <textarea className='form-control' required name="description" type='text' placeholder='Description'/>
              </div>
              <div className='admin-form-group'>
                <Input variant='form-control' required={true} name="sourceCodeLink" autoComplete='off' type='text' placeholder='Source Code Link'/>
              </div>
              <div className='admin-form-group'>
                <Input variant='form-control' required={true} name="hostedLink" autoComplete='off' type='text' placeholder='Hosted Link'/>
                <Input variant='form-control' required={true} name="hostedStatus" autoComplete='off' type='text' placeholder="Currently Live"/>
              </div>
              <div className='admin-form-group'>
                <Input variant='form-control' required={true} name="searchTags" autoComplete='off' type='text' placeholder='Search Tags'/>
              </div>
              <div className='admin-form-group'>
                <FileInput id="icon" required={true} name="icon" accept="image/*"/>
                <Label variant='form-control' for="icon" text="Choose an icon..."/>
                <FileInput id="media" required={true} multiple={true} name="mediaFiles" accept="image/*"/>
                <Label variant='form-control' for="media" text="Choose media..."/>
              </div>
              <div className='admin-form-group'>
                <Button type="submit" variant="form-control button blue" text="Submit New Project"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default withRouter(Projects);
