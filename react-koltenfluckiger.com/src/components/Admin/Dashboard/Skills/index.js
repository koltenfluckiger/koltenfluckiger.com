import React, {Component} from 'react';
import {withRouter} from "react-router";
import {ApiHandler} from '../../../../utils';
import {Input, Tagger, Title} from '../../../common';

import Skill from './Skill';
import Subskill from './Subskill';
import PropTypes from 'prop-types';

import './style.scss';

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      skills: [],
      subskills: []
    }
    this.handleSkillSubmit = this.handleSkillSubmit.bind(this);
    this.handleSubSkillSubmit = this.handleSubSkillSubmit.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.deleteSubSkill = this.deleteSubSkill.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const skills = await ApiHandler.get('/skills', "json", {field: "subSkills"});
      const subskills = await ApiHandler.get('/subskills', "json");
      this.setState({loading: false, skills: skills.data, subskills: subskills.data});
    } catch (err) {
      console.log(err);
    }
  }

  async deleteSkill(id) {
    try {
      await ApiHandler.delete("/skills", "json", {filter: {_id: id}});
      this.props.history.go(this.props.location.pathname);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteSubSkill(id) {
    try {
      await ApiHandler.delete("/subskills", "json", {filter: {_id: id}});
      this.props.history.go(this.props.location.pathname);
    } catch (err) {
      console.log(err);
    }
  }

  async handleSkillSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const subSkills = form.subSkills.dataset.tags.split(",");
    const skillSearchTags = form.skillSearchTags.dataset.tags.split(",");
    const abbreviation = form.abbreviation.value
    const payload = {
      title: title,
      subSkills: subSkills,
      abbreviation: abbreviation,
      searchTags: skillSearchTags
    };
    try {
      const results = await ApiHandler.post("/skills", "json", payload);
      if (results.status === 200) {
        this.props.history.go(this.props.location.pathname);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async handleSubSkillSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const subskillSearchTags = form.subskillSearchTags.dataset.tags.split(",");

    const payload = {
      title: form.title.value,
      searchTags: subskillSearchTags
    };
    try {
      const results = await ApiHandler.post("/subskills", "json", payload);
      if (results.status === 200) {
        this.props.history.go(this.props.location.pathname);
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (<div className='admin-dashboard-skills-container'>
      <div className='admin-skills-list-form-container'>
        <div className='admin-skills-list-container'>
          <div className='admin-skills-container'>
            <Title text="Skills"/>
            <div className='admin-skill-list'>
              <ul className="admin-ul-skill-container">
                {
                  this.state.loading
                    ? ""
                    : this.state.skills.map(skill => (<Skill key={skill.title} title={skill.title} id={skill._id} subSkills={skill.subSkills} deleteSkill={this.deleteSkill}/>))
                }
              </ul>
            </div>
          </div>
          <div className='admin-skills-container'>
            <div className='admin-title-container'>
              <h2>Subskills</h2>
            </div>
            <div className='admin-skill-list'>
              <ul className="admin-ul-skill-container">
                {
                  this.state.loading
                    ? ""
                    : this.state.subskills.map(subskill => (<Subskill key={subskill.title} title={subskill.title} id={subskill._id} deleteSubSkill={this.deleteSubSkill}/>))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className='admin-new-skill-container'>
          <div className='admin-skills-container'>
            <Title text="New Skill"/>
            <div className='admin-new-skill-form-container'>
              <form onSubmit={this.handleSkillSubmit} method="post" encType="application/x-www-form-urlencoded">
                <div className='admin-form-group'>
                  <Input variant='form-control' isRequired={true} name="title" autoComplete='off' type='text' placeholder='Title'/>
                  {
                    <Tagger id="subSkills" variant="tagger-input" name="subSkills" placeholder='Subskills' whiteListTags={this.state.subskills} options={{
                          allow_spaces: true,
                          onlyWhiteList: true
                        }}/>
                  }
                </div>
                <div className='admin-form-group'>
                  <Input variant='form-control' isRequired={true} name="abbreviation" autoComplete='off' type='text' placeholder='Abbreviation'/>
                  <Tagger id="skill-search-tags" variant="tagger-input" name="skillSearchTags" placeholder='Search Tags' options={{
                      allow_spaces: true,
                      onlyWhiteList: false
                    }}/>
                </div>
                <div className='admin-form-group'>
                  <button type="submit" className=" button-form-control button blue">Submit New Skill</button>
                </div>
              </form>
            </div>
          </div>
          <div className='admin-skills-container'>
            <Title text="New Subskill"/>
            <div className='admin-new-skill-form-container'>
              <form onSubmit={this.handleSubSkillSubmit} method="post" encType="application/x-www-form-urlencoded">
                <div className='admin-form-group'>
                  <Input variant='form-control' isRequired={true} name="title" autoComplete='off' type='text' placeholder='Title'/>
                </div>
                <div className='admin-form-group'>
                  <Tagger id="subskill-search-tags" variant="tagger-input" name="subskillSearchTags" placeholder='Search Tags' options={{
                      allow_spaces: true,
                      onlyWhiteList: false
                    }}/>
                </div>
                <div className='admin-form-group'>
                  <button type="submit" className="button-form-control button blue">Submit New Skill</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default withRouter(Skills);
