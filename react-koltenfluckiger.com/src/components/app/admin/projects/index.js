import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from "react-router";
import AxiosHandler from "axios-api-handler";
import {
  Button,
  Container,
  Column,
  Edit,
  Form,
  FormGroup,
  Label,
  LoadingScreen,
  FileInput,
  Input,
  Project,
  SubContainer,
  Tagger,
  TextArea,
  Title,
  Ul
} from '../../../common';

import styles from "./projects.module.css";

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      subskills: [],
      loading: true,
      popup: {
        _id: null,
        show: false
      }
    }
    this.onClick = this.onClick.bind(this);
    this.onExit = this.onExit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onClick(_id) {
    this.setState({
      loading: false,
      popup: {
        _id: _id,
        show: true
      }
    })
  }
  onExit() {
    this.setState({
      popup: {
        _id: null,
        show: false
      }
    })
  }

  async handleSubmit(e) {
    e.preventDefault();

    const projectForm = document.getElementById('new-project-form');
    const formData = new FormData(projectForm);
    const subSkills = e.target.subSkills.dataset.tags
      ? e.target.subSkills.dataset.tags
      : [];
    const searchTags = e.target.searchTags.dataset.tags
      ? e.target.searchTags.dataset.tags
      : [];

    formData.set("subSkills", subSkills);
    formData.set("searchTags", searchTags);

    try {
      const results = await AxiosHandler.post("/api/projects", {
        payload: formData,
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
      const projects = await AxiosHandler.get('/projects', {
        params: {
          populate: {
            field: "subSkills"
          }
        },
        headers: {"Content-Type": "application/json"}
      });
      const subskills = await AxiosHandler.get('/subskills', {headers: {"Content-Type": "application/json"}});
      this.setState({loading: false, projects: projects.data, subskills: subskills.data});
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {projects, loading, popup} = this.state;
    const {onExit, onClick} = this;
    if (loading) {
      return <LoadingScreen/>
    }

    return (<Container>
      {
        this.state.popup.show
          ? <Edit>
              <Edit.Project onExit={onExit} _id={popup._id}></Edit.Project>
            </Edit>
          : null
      }
      <SubContainer>
        <Column>
          <Title text="Projects"/>
          <Ul>
            {projects.map(project => (<Project.Card.Admin key={project._id} title={project.title} iconURL={project.iconURL} subSkills={project.subSkills} date={project.date} _id={project._id} onClick={onClick}/>))}
          </Ul>
        </Column>
        <Column>
          <Title text="New Project"/>
          <div className={styles.adminNewProjectFormContainer}>
            <Form preventEnterSubmit="preventEnterSubmit" id="new-project-form" handleSubmit={this.handleSubmit} encType="multiPart">
              <FormGroup>
                <Input variant={{
                    classes: "admin-input"
                  }} required="required" name="title" autoComplete='off' type='text' placeholder='Title'/>
                <Tagger id="subskill-search-tags" variant={{
                    classes: "taggerInput"
                  }} name="subSkills" placeholder='Skills' whiteListTags={this.state.subskills} options={{
                    allow_spaces: true,
                    onlyWhiteList: true
                  }}/>
              </FormGroup>
              <FormGroup>
                <TextArea variant={{
                    classes: "admin-input"
                  }} name="description" type='text' placeholder='Description' rows="10" required="required"/>
              </FormGroup>
              <FormGroup>
                <Input variant={{
                    classes: "admin-input"
                  }} required={true} name="sourceCodeLink" autoComplete='off' type='text' placeholder='Source Code Link'/>
              </FormGroup>
              <FormGroup>
                <Input variant={{
                    classes: "admin-input"
                  }} required="required" name="hostedLink" autoComplete='off' type='text' placeholder='Hosted Link'/>
                <Input variant={{
                    classes: "admin-input"
                  }} required="required" name="hostedStatus" autoComplete='off' type='text' placeholder="Currently Live"/>
              </FormGroup>
              <FormGroup>
                <Tagger id="project-search-tags" variant={{
                    classes: "taggerInput"
                  }} name="searchTags" placeholder='Search Tags' options={{
                    allow_spaces: true,
                    onlyWhiteList: false
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
                  }} text="Submit New Project"/>
              </FormGroup>
            </Form>
          </div>
        </Column>
      </SubContainer>
    </Container>)
  }
}

export default withRouter(Projects);
