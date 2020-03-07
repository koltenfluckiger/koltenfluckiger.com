import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AxiosHandler from "axios-api-handler";
import {withRouter} from "react-router";
import {
  Icon,
  Form,
  FormGroup,
  Input,
  Tagger,
  Label,
  Button,
  LoadingScreen
} from "../../";

import styles from "./skill.module.css";

class Skill extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      skill: null
    }
  }

  async handleDelete() {
    try {
      await AxiosHandler.delete("/skills", {
        type: "json",
        params: {
          query: {
            filter: {
              _id: this.props._id
            }
          }
        }
      })
      this.props.history.go(this.props.location.pathname);
    } catch (err) {
      console.log(err);
    }
  }

  async handleSubmit(e) {
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
      const results = await AxiosHandler.put("/skills", payload, {type: "json"});
      if (results.status === 200) {
        this.props.history.go(this.props.location.pathname);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      const skill = await AxiosHandler.get(`/skills/${this.props._id}`, {
        type: "json",
        params: {
          populate: {
            field: "subSkills"
          },
          query: {
            filter: {
              _id: this.props._id
            }
          }
        }
      });
      this.setState({loading: false, skill: skill.data});
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {skill, loading} = this.state;
    const {onExit, type} = this.props;
    const {handleDelete, handleSubmit} = this;

    if (loading) {
      return <LoadingScreen/>
    }
    return (<div className={styles.subcontainer}>
      <div onClick={() => {onExit(type)}} className={styles.exitContainer}>
        <Icon variant={{classes: "delete-icon sml fa fa-times"}}/>
      </div>
      <Form handleSubmit={this.handleSubmit} encType="urlEncoded">
        <FormGroup>
          <Input id="skill-title" variant={{classes: "admin-input"}} isRequired="isRequired" name="title" autoComplete='off' type='text' placeholder='Title' defaultValue={skill.title}/>
          <Input id="skill-abbrv" variant={{classes: "admin-input"}} isRequired="isRequired" name="abbreviation" autoComplete='off' type='text' placeholder='Abbreviation' defaultValue={skill.abbreviation}/>
        </FormGroup>
        <FormGroup>
          <Tagger id="skill-subskills" variant={{classes: "taggerInput"}} name="subSkills" placeholder='Subskills' whiteListTags={skill.subSkills} options={{
              allow_spaces: true,
              onlyWhiteList: true,
              defaultTags: skill.subSkills ? skill.subSkills : []
            }}/>
        </FormGroup>
        <FormGroup>
          <Button id="skill-submit" type="submit" variant={{classes: "button-form-control button green"}} text="Submit Changes"/>
          <Button onClick={handleDelete} type="button" variant={{classes: "button-form-control button red"}} text="Delete"/>
        </FormGroup>
      </Form>
    </div>)
  }
}

export default withRouter(Skill);
