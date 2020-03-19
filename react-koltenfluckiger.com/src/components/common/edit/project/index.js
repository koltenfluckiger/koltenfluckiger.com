import React, {Component} from 'react';
import {
  Icon,
  Form,
  FormGroup,
  Input,
  Tagger,
  Label,
  Button,
  TextArea,
  FileInput,
  LoadingScreen
} from "../../";
import AxiosHandler from "axios-api-handler";
import {withRouter} from "react-router";

import styles from "./project.module.css";

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      project: [],
      subskills: []
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleDelete() {
    try {
      await AxiosHandler.delete("/projects", {
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
    const projectForm = document.getElementById('edit-project-form');
    const formData = new FormData(projectForm);
    const subSkills = e.target.subSkills.dataset.tags
      ? e.target.subSkills.dataset.tags
      : "";
    const searchTags = e.target.searchTags.dataset.tags
      ? e.target.searchTags.dataset.tags
      : "";

    formData.set("subSkills", subSkills);
    formData.set("searchTags", searchTags);

    try {
      const results = await AxiosHandler.put("/projects/edit", {
        payload: formData,
        params: {
          query: {
            filter: {
              _id: this.props._id
            }
          }
        },
        headers: {
          "Content-Type": "multipart/form-data"
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
      const project = await AxiosHandler.get(`/projects/${this.props._id}`, {
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
      const subskills = await AxiosHandler.get('/subskills', {
        headers: {
          "Content-Type": "application/json"
        }
      });
      this.setState({loading: false, project: project.data, subskills: subskills.data});
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {project, subskills, loading} = this.state;
    const {onExit} = this.props;
    const {handleDelete, handleSubmit} = this;

    if (loading) {
      return <LoadingScreen/>
    }
    return (<div className={styles.subcontainer}>
      <div onClick={onExit} className={styles.exitContainer}>
        <Icon variant={{
            classes: "delete-icon sml fa fa-times"
          }}/>
      </div>
      <Form preventEnterSubmit="preventEnterSubmit" id="edit-project-form" handleSubmit={handleSubmit} encType="multiPart">
        <FormGroup>
          <Input variant={{
              classes: "admin-input"
            }} required="required" name="title" autoComplete='off' type='text' placeholder='Title' defaultValue={project.title}/>
          <Tagger id="subskill-tags" name="subSkills" variant={{
              classes: "tagger-input"
            }} whiteListTags={subskills} options={{
              allow_spaces: true,
              onlyWhiteList: true,
              defaultTags: project.subSkills
            }}/>
        </FormGroup>
        <FormGroup>
          <TextArea variant={{
              classes: "admin-input"
            }} name="description" type='text' placeholder='Description' rows="10" required="required" defaultValue={project.description}/>
        </FormGroup>
        <FormGroup>
          <Input variant={{
              classes: "admin-input"
            }} required={true} name="sourceCodeLink" autoComplete='off' type='text' placeholder='Source Code Link' defaultValue={project.hostedStatus
              ? "Yes"
              : "No"}/>
        </FormGroup>
        <FormGroup>
          <Input variant={{
              classes: "admin-input"
            }} required="required" name="hostedLink" autoComplete='off' type='text' placeholder='Hosted Link' defaultValue={project.hostedLink}/>
          <Input variant={{
              classes: "admin-input"
            }} required="required" name="hostedStatus" autoComplete='off' type='text' placeholder="Currently Live" defaultValue={project.hostedStatus}/>
        </FormGroup>
        <FormGroup>
          <Tagger id="project-search-tags" variant={{
              classes: "tagger-input"
            }} name="searchTags" placeholder='Search Tags' options={{
              allow_spaces: true,
              onlyWhiteList: false,
              defaultTags: project.searchTags
                ? project.searchTags
                : []
            }}/>
        </FormGroup>
        <FormGroup>
          <FileInput id="icon" name="icon" accept="image/*"/>
          <Label variant={{
              classes: "admin-input"
            }} for="icon" text="Choose an icon..."/>
          <FileInput id="media" multiple="multiple" name="mediaFiles" accept="image/*"/>
          <Label variant={{
              classes: "admin-input"
            }} for="media" text="Choose media..."/>
        </FormGroup>
        <FormGroup>
          <Button type="submit" variant={{
              classes: "button-form-control button green"
            }} text="Submit Changes"/>
          <Button onClick={handleDelete} type="button" variant={{
              classes: "button-form-control button red"
            }} text="Delete"/>
        </FormGroup>
      </Form>
    </div>)
  }
}

export default withRouter(Project);
