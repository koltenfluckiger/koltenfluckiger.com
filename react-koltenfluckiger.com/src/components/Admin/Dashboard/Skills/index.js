import React, {Component} from 'react';
import {withRouter} from "react-router";
import Skill from './Skill';
import Tagger from '../../../Tagger';
import PropTypes from 'prop-types';
import ApiHandler from '../../../../utils/apihandler';

import './style.scss';

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      skills: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async deleteSkill(id) {
    try {
      await ApiHandler.delete("/skills", {
        params: {
          id: id
        }
      });
      this.props.history.push(this.props.location.pathname);
    } catch (err) {
      console.log(err);
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const subSkills = form.subSkills.dataset.tags.split(",");
    const skillSearchTags = form.skillSearchTags.dataset.tags.split(",");
    const payload = {
      title: form.title.value,
      subSkills: subSkills,
      abbreviation: form.abbreviation.value,
      searchTags: skillSearchTags
    };
    try {
    const results = await ApiHandler.post("/skills", payload, "json");
    if (results.status === 200){
          this.props.history.push(this.props.location.pathname);
        }
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      const skills = await ApiHandler.get('/skills', "json");
      console.log(skills);
      this.setState({loading: false, skills: skills.data});
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (<div className='admin-dashboard-skills-container'>
      <div className='admin-skills-list-form-container'>
        <div className='admin-skills-list-container'>
          <div className='admin-title-container'>
            <h2>Skills</h2>
          </div>
          <div className='admin-skill-list'>
            <ul>
              {
                this.state.loading
                  ? ""
                  : this.state.skills.map(skill => (<Skill key={skill.title} title={skill.title} subSkills={skill.subSkills} abbreviation={skill.abbreviation} id={skill._id} deleteSkill={this.deleteSkill}/>))
              }
            </ul>
          </div>
        </div>
        <div className='admin-new-skill-container'>
          <div className='admin-title-container'>
            <h2>New Skill</h2>
          </div>
          <div className='admin-new-skill-form-container'>
            <form onSubmit={this.handleSubmit} method="post" encType="application/x-www-form-urlencoded">
              <div className='admin-form-group'>
                <input className='form-control' required="required" name="title" autoComplete='off' type='text' placeholder='Title'/>
                <Tagger id="subSkills" variant="tagger-input" name="subSkills" placeholder='Subskills' options={{
                    allow_spaces: true,
                    onlyWhiteList: false,
                    whiteListTags: []
                  }}/>
              </div>
              <div className='admin-form-group'>
                <input className='form-control' required="required" name="abbreviation" autoComplete='off' type='text' placeholder='Abbreviation'/>
                <Tagger id="skill-search-tags" variant="tagger-input" name="skillSearchTags" placeholder='Search Tags' options={{
                    allow_spaces: true,
                    onlyWhiteList: false,
                    whiteListTags: []
                  }}/>
              </div>
              <div className='admin-form-group'>
                <button type="submit" className=" button-form-control button blue">Submit New Skill</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default withRouter(Skills);
