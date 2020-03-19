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

import styles from "./subskill.module.css";

class SubSkill extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      subskill: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleDelete() {
    try {
      await AxiosHandler.delete("/subskills", {
        params: {
          query: {
            filter: {
              _id: this.props._id
            }
          }
        },
        headers: {
          "Content-Type": "application/json"
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
    const subskillSearchTags = form.subskillSearchTags.dataset.tags
      ? form.subskillSearchTags.dataset.tags.split(",")
      : "";

    const payload = {
      title: form.title.value,
      searchTags: subskillSearchTags
    };
    try {
      const results = await AxiosHandler.put("/subskills/edit", {payload: payload, params: {query: {
        filter: {
          _id: this.props._id
        }
      }
    },
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

  async componentDidMount() {
    try {
      const subskill = await AxiosHandler.get(`/subskills/${this.props._id}`, {
        params: {
          populate: {
            field: "subSkills"
          },
          query: {
            filter: {
              _id: this.props._id
            }
          }
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      this.setState({loading: false, subskill: subskill.data});
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {subskill, loading} = this.state;
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
          <Input id="subskill-title" variant={{classes: "admin-input"}} isRequired="isRequired" name="title" autoComplete='off' type='text' placeholder='Title' defaultValue={subskill.title}/>
        </FormGroup>
        <FormGroup>
          <Tagger id="subskill-search-tags" variant={{classes: "taggerInput"}} name="subskillSearchTags" placeholder='Search Tags' options={{
              allow_spaces: true,
              onlyWhiteList: false,
              defaultTags: subskill.searchTags ? subskill.searchTags : []
            }}/>
        </FormGroup>
        <FormGroup>
          <Button id="subskill-submit" type="submit" variant={{classes: "button-form-control button green"}} text="Submit Changes"/>
          <Button onClick={handleDelete} type="button" variant={{classes: "button-form-control button red"}} text="Delete"/>
        </FormGroup>
      </Form>
    </div>)
  }
}

export default withRouter(SubSkill);
