import React, {Component} from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";

import styles from './error.module.css';

class Error extends React.PureComponent {

  render() {
    return (
        <Redirect to="/"></Redirect>
    )
  }
}

export default Error;
