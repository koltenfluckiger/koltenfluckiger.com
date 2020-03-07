import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './title.module.css';

class Title extends React.PureComponent {

  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    return (
      <div className={styles.titleContainer}>
        <h2>{this.text}</h2>
      </div>
    )
  }
}

export default Title;
