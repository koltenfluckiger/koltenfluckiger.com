import React, {Component} from 'react';
import {withRouter} from "react-router";
import {withLoader} from "../../../../higher-order-components";
import {
  BackButton,
  Button,
  ContentCard,
  Container,
  Project as CurrentProject,
  SubContainer,
  LoadingScreen,
  Title
} from '../../../common';
import AxiosHandler from "axios-api-handler";

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this._id = props.match.params.id;
  }

  async componentDidMount() {
    try {
      const project = await AxiosHandler.get(`/projects/${this._id}`, {
        params: {
          populate: {
            field: "subSkills"
          },
          query: {
            filter: {
              _id: this._id
            }
          }
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
      this.setState({loading: false, project: project.data});
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {project, loading} = this.state;
    if (loading) {
      return <LoadingScreen/>
    }

    return (<Container>
      <SubContainer>
        <ContentCard>
          <BackButton/>
          <CurrentProject.Title text={project.title}/>
          <CurrentProject.Date text={project.date}/>
          <CurrentProject.Skills subskills={project.subSkills}/>
          <CurrentProject.Description content={project.description}/>
          <CurrentProject.Media screenshots={project.screenshotURLS}/>
          <CurrentProject.Buttons sourceCodeLink={project.sourceCodeLink} hostedLink={project.hostedLink} hostedStatus={project.hostedStatus}/>
        </ContentCard>
      </SubContainer>
    </Container>)
  }
}

export default Project;
