import React, {Component} from "react";
import {Container, SubContainer, Column} from "../../../common";

import Projects from "./projects";
import Skills from "./skills";

class Portfolio extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchText: ""
    }
    this.onClick = this.onClick.bind(this);
  };

  onClick(e){
    const title = e.title;
    this.setState({searchText: title});
  }

  render() {
    return (<Container>
      <SubContainer>
        <Column>
          <Projects key={this.state.searchText} searchText={this.state.searchText}/>
        </Column>
        <Column>
          <Skills onClick={this.onClick}/>
        </Column>
      </SubContainer>
    </Container>)
  }
}

export default Portfolio;
