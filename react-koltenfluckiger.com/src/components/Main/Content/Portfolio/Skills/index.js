import React, {Component} from "react";
import {Title} from "../../../../common";

import Skill from "./skill";
import ApiHandler from '../../../../../utils/api-handler';

import "./style.scss";

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      skills: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const skills = await ApiHandler.get('/skills', "json", {field: "subSkills"});
      this.setState({skills: skills.data});
    } catch(err){
      console.log(err);
    }
  }

  render() {
    return (<div className="skills-container">
      <Title text="Skills"/>
      <div className="skills-card-container">
        <div className="skills-card-subtitle-container">
          <h6>Click to see the corresponding projects</h6>
        </div>
        <div className="skills-skill-container">
          {this.state.skills.map((skill) => (
            <Skill key={skill._id} title={skill.title} variant="blue-circle" abbreviation={skill.abbreviation} subSkills={skill.subSkills}/>))
          }
        </div>
      </div>
    </div>)
  }
}

export default Skills;
