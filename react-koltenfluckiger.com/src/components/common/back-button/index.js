import React, {Component} from 'react';
import {withRouter} from "react-router";

import PropTypes from 'prop-types';

import styles from './backbutton.module.scss';

class BackButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a onClick={this.props.history.goBack} className={styles.backbutton}>
        <i className="fas fa-arrow-left"></i>
      </a>
    )
  }
}

export default withRouter(BackButton);
