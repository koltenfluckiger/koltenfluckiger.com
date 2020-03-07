import React, {Component, Fragment} from "react";
import {withLoader} from "../../../../../higher-order-components";
import {
  Project,
  SearchBar,
  LoadingScreen,
  Title,
  SubContainer,
  Ul
} from "../../../../common";

import AxiosHandler from "axios-api-handler";

import styles from "./projects.module.css";

const LoadingUl = withLoader(Ul);

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      filteredProjects: [],
      projects: []
    }
    this.search = this.search.bind(this);
    this.searchText = props.searchText;
  }

  async componentDidMount() {
    try {
      const projects = await AxiosHandler.get("/projects", {type: "json",
        params: {
          populate: {
          field: "subSkills"
        },
        returned_fields: {
          sourceCodeLink: 0,
          hostedStatus: 0,
          description: 0
        },
        sort: {
          searchTags: 1
        }
      }
      });
      this.setState({loading: false, projects: projects.data, filteredProjects: projects.data});
      if (this.searchText) {
        this.search({
          target: {
            value: this.searchText
          }
        })
      };
    } catch (err) {
      console.log(err);
    }
  }

  search(e) {
    if (e.target.value.length < 1) {
    return this.setState({filteredProjects: this.state.projects});
    };
    const text = e.target.value;
    const results = this.state.projects.filter(p => p).filter(p => {
      return p.searchTags.filter(tag => {
        if (tag.length < text.length) {
          return false;
        };
        var matched = false;
        for (var i = 0; i < text.length; i++) {
          const x = text[i].toLowerCase();
          const y = tag[i].toLowerCase();

          if (x !== y) {
            return false;
          } else {
            matched = true;
          }
        }
        return matched;
      }).length > 0
        ? true
        : false;
    });
    return this.setState({filteredProjects: results});
  };

  render() {
    const {filteredProjects, loading} = this.state;
    if (loading) {
      return (<Fragment>
        <Title text="Projects"/>
        <SearchBar search={this.search} value={this.searchText}/>
        <LoadingUl loading={loading}/>
      </Fragment>)
    }
    return (<Fragment>
      <Title text="Projects"/>
      <SearchBar search={this.search} value={this.searchText}/>
      <LoadingUl loading={loading}>
        {this.state.filteredProjects.map(project => <Project.Card key={project._id} title={project.title} _id={project._id} iconURL={project.iconURL} subSkills={project.subSkills} date={project.date} searchTags={project.searchTags}/>)}
      </LoadingUl>
    </Fragment>)
  }
}

export default Projects;
