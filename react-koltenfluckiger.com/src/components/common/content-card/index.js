import React, {Component} from 'react';
import {withChildren} from "../../../higher-order-components";

import styles from "./content-card.module.css";

class ContentCard extends React.PureComponent {

  render() {
    return (<div className={styles.contentCard}>{this.props.render}</div>)
  }
}

export default withChildren(ContentCard);
