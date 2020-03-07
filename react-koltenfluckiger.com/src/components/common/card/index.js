import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from "./card.module.css";

class Card extends React.PureComponent {

  render() {
    return (<div className={styles.card}>{this.props.children}</div>)
  }
}

export default Card;
