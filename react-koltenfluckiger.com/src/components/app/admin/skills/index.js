import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from "react-router";
import AxiosHandler from "axios-api-handler";
import {
  Button,
  Column,
  Container,
  Edit,
  FileInput,
  Form,
  FormGroup,
  Grid,
  GridItem,
  Input,
  Label,
  LoadingScreen,
  Panel,
  SubContainer,
  Tagger,
  TextArea,
  Title
} from '../../../common';

import Skill from './skill';
import Subskill from './subskill';

import styles from "./skills.module.css";

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      skills: [],
      subskills: [],
      popupSkill: {
        _id: null,
        show: false
      },
      popupSubSkill: {
        _id: null,
        show: false
      }
    }
    this.onClick = this.onClick.bind(this);
    this.onExit = this.onExit.bind(this);
    this.handleSkillSubmit = this.handleSkillSubmit.bind(this);
    this.handleSubSkillSubmit = this.handleSubSkillSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      const skills = await AxiosHandler.get('/skills', {
        params: {
          populate: {
            field: "subSkills"
          },
          sort: {
            _id: "asc"
          }
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      const subskills = await AxiosHandler.get('/subskills', {
        params: {
          sort: {
            _id: "asc"
          },
          returned_fields: {
            title: 1,
            searchTags: 1
          }
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      this.setState({loading: false, skills: skills.data, subskills: subskills.data});
    } catch (err) {
      console.log(err);
    }
  }

  async deleteSkill(_id) {
    try {
      await AxiosHandler.delete("/api/subskills", {
        params: {
          query: {
            filter: {
              _id: _id
            }
          }
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      this.props.history.go(this.props.location.pathname);
    } catch (err) {
      console.log(err);
    }
  }

  async deleteSubSkill(_id) {
    try {
      await AxiosHandler.delete("/api/subskills", {
        params: {
          query: {
            filter: {
              _id: _id
            }
          }
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      this.props.history.go(this.props.location.pathname);
    } catch (err) {
      console.log(err);
    }
  }

  async handleSkillSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const subSkills = form.subSkills.dataset.tags
      ? form.subSkills.dataset.tags.split(",")
      : "";
    const abbreviation = form.abbreviation.value
    const payload = {
      title: title,
      subSkills: subSkills,
      abbreviation: abbreviation
    };
    try {
      const results = await AxiosHandler.post("/api/skills", {
        payload: payload,
        headers: {
          "Content-Type": "application/json"
        }
      });
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
    const subskillSearchTags = form.subskillSearchTags.dataset.tags
      ? form.subskillSearchTags.dataset.tags.split(",")
      : "";

    const payload = {
      title: form.title.value,
      searchTags: subskillSearchTags
    };
    try {
      const results = await AxiosHandler.post("/api/subskills", {
        payload: payload,
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (results.status === 200) {
        this.props.history.go(this.props.location.pathname);
      }
    } catch (err) {
      console.log(err);
    }
  }

  onClick(type, _id) {
    this.setState({
      loading: false,
      [type]: {
        _id: _id,
        show: true
      }
    })
  }
  onExit(type) {
    this.setState({
      loading: false,
      [type]: {
        _id: null,
        show: false
      }
    })
  }

  render() {
    const {skills, subskills, loading, popupSkill, popupSubSkill} = this.state;
    const {onExit, onClick} = this;
    if (loading) {
      return <LoadingScreen/>
    }
    return (<Container>
      {
        popupSkill.show
          ? <Edit>
              <Edit.Skill type="popupSkill" onExit={onExit} _id={popupSkill._id}></Edit.Skill>
            </Edit>
          : null
      }{
        popupSubSkill.show
          ? <Edit>
              <Edit.SubSkill type="popupSubSkill" onExit={onExit} _id={popupSubSkill._id}></Edit.SubSkill>
            </Edit>
          : null
      }
      <SubContainer>
        <Grid variant={{
            classes: "two-column-flexible-mdm-gap mdm"
          }}>
          <GridItem>
            <Title text="Skills"/>
            <Panel variant={{
                classes: "panel"
              }}>
              <Grid variant={{
                  classes: "three mdm"
                }}>
                {skills.map(skill => (<GridItem key={skill._id}><Skill onClick={onClick} key={skill._id} title={skill.title} _id={skill._id} subSkills={skill.subSkills} abbreviation={skill.abbreviation} type="popupSkill"/></GridItem>))}
              </Grid>
            </Panel>
          </GridItem>
          <GridItem>
            <Title text="Subskills"/>
            <Panel variant={{
                classes: "panel"
              }}>
              <Grid variant={{
                  classes: "three mdm"
                }}>
                {subskills.map(subskill => (<GridItem key={subskill._id}><Subskill onClick={onClick} key={subskill.title} title={subskill.title} _id={subskill._id} deleteSubSkill={this.deleteSubSkill} searchTags={subskill.searchTags} type="popupSubSkill"/></GridItem>))}
              </Grid>
            </Panel>
          </GridItem>
          <GridItem>
            <Title text="New Skill"/>
            <Panel variant={{
                classes: "panel visible padded-content-mdm"
              }}>
              <Form handleSubmit={this.handleSkillSubmit} encType="urlEncoded">
                <FormGroup>
                  <Input id="skill-title" variant={{
                      classes: "admin-input"
                    }} isRequired={true} name="title" autoComplete='off' type='text' placeholder='Title'/>
                  <Input id="skill-abbrv" variant={{
                      classes: "admin-input"
                    }} isRequired={true} name="abbreviation" autoComplete='off' type='text' placeholder='Abbreviation'/>
                </FormGroup>
                <FormGroup>
                  <Tagger id="skill-subskills" variant={{
                      classes: "taggerInput"
                    }} name="subSkills" placeholder='Subskills' whiteListTags={this.state.subskills} options={{
                      allow_spaces: true,
                      onlyWhiteList: true
                    }}/>
                </FormGroup>
                <FormGroup>
                  <Button id="skill-submit" type="submit" variant={{
                      classes: "button-form-control button green"
                    }} text="Submit New Skill"/>
                </FormGroup>
              </Form>
            </Panel>
          </GridItem>
          <GridItem>
            <Title text="New Subskill"/>
            <Panel variant={{
                classes: "panel visible padded-content-mdm"
              }}>
              <Form handleSubmit={this.handleSubSkillSubmit} encType="urlEncoded">
                <FormGroup>
                  <Input id="subskill-title" variant={{
                      classes: "admin-input"
                    }} isRequired="isRequired" name="title" autoComplete='off' type='text' placeholder='Title'/>
                </FormGroup>
                <FormGroup>
                  <Tagger id="subskill-search-tags" variant={{
                      classes: "taggerInput"
                    }} name="subskillSearchTags" placeholder='Search Tags' options={{
                      allow_spaces: true,
                      onlyWhiteList: false
                    }}/>
                </FormGroup>
                <FormGroup>
                  <Button id="subskill-submit" type="submit" variant={{
                      classes: "button-form-control button green"
                    }} text="Submit New Subskill"/>
                </FormGroup>
              </Form>
            </Panel>
          </GridItem>
        </Grid>
      </SubContainer>
    </Container>)
  }
}

export default withRouter(Skills);
