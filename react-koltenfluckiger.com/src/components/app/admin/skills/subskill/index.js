import React, {Component} from 'react';
import {withRouter} from "react-router";
import {Button, Icon, Span} from "../../../../common";

import styles from "./subskill.module.css";

class Subskill extends React.PureComponent {

  render() {
    const {onClick, _id, title, type} = this.props;
    return (<div onClick={() => onClick(type, _id)} className={styles.container}>
      <Span variant={{classes: "subskill-span"}}>
        {title}
      </Span>
    </div>)
  }
}

export default withRouter(Subskill);
