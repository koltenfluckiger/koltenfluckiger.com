import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {withRouter} from "react-router";
import {Card, Container, Column, SubContainer, Title} from '../../../common';

import Projects from '../projects';
import Skills from '../skills';

class DashBoard extends React.PureComponent {

  render() {
    return (<Container>
      <SubContainer>
        <Column>
          <Card><Title text="Views"/></Card>
        </Column>
        <Column>
          <Card><Title text="Emails Sent"/></Card>
        </Column>
        <Column>
          <Card><Title text="Components"/></Card>
        </Column>
      </SubContainer>
    </Container>)
  }
}

export default withRouter(DashBoard);
