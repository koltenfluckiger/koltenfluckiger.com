import React, {Component, Fragment} from "react";
import {withLoader} from "../../../../../higher-order-components";
import {Title, Card, Grid, GridItem, LoadingScreen} from "../../../../common";
import AxiosHandler from "axios-api-handler";
import Skill from "./skill";
import styles from "./skills.module.css";

const LoadingGrid = withLoader(Grid);

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      skills: []
    }
    this.onClick = props.onClick;
    this.colors = ["blue-circle", "red-circle", "lemon-circle", "diamond-circle", "green-circle"];
    this.count = 0;
  }

  async componentDidMount() {
    try {
      const skills = await AxiosHandler.get("/skills", {type: "json", params: {
        populate: {
          field: "subSkills"
        },
        sort: {
          _id: "asc"
        }
      }});
      this.setState({loading: false, skills: skills.data});
    } catch (err) {
      console.log(err);
    }
  }

  generateClassName() {
    switch (this.count) {
      case 0:
        this.count++;
        return this.colors[0];
      case 1:
        this.count++;
        return this.colors[1];
      case 2:
        this.count++;
        return this.colors[2];
      case 3:
        this.count++;
        return this.colors[3];
      case 4:
        this.count = 0;
        return this.colors[4];
      default:
        break;
    }
  }

  render() {
    const {skills, loading} = this.state;

    if (loading) {
      return (<Fragment>
        <Title text="Skills"/>
        <Card>
          <div className={styles.cardSubtitleContainer}>
            <h6>Click to see the corresponding projects</h6>
          </div>
          <LoadingGrid loading={loading} variant={{classes: "three mdm"}}></LoadingGrid>
        </Card>
      </Fragment>)
    }

    return (<Fragment>
      <Title text="Skills"/>
      <Card>
        <div className={styles.cardSubtitleContainer}>
          <h6>Click to see the corresponding projects</h6>
        </div>
        <LoadingGrid loading={loading} variant={{classes: "three mdm"}}>
          {
            skills.map(skill => (<GridItem key={skill._id}>
              <Skill key={skill._id} onClick={this.onClick} title={skill.title} variant={{classes: `skill-circle ${this.generateClassName()}`}} abbreviation={skill.abbreviation} subSkills={skill.subSkills}/>
            </GridItem>))
          }
        </LoadingGrid>
      </Card>
    </Fragment>)
  }
}

export default Skills;
