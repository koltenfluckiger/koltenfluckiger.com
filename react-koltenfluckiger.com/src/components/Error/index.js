import React, {Component} from 'react';
import { BrowserRouter as Route, Redirect } from "react-router-dom";

import './style.scss';

class Error extends Component {

  render() {
    return (
        <Redirect to='/'></Redirect>
    )
  }
}

export default Error;
