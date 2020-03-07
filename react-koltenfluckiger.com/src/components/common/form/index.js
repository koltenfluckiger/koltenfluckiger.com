import React, {Component} from 'react';
import {withChildren} from "../../../higher-order-components";

import styles from "./form.module.css";

class Form extends React.PureComponent {

  encodingTypes = {
    urlEncoded: "application/x-www-form-urlencoded",
    multiPart: "multipart/form-data"
  }

  constructor(props) {
    super(props);
    this.id = props.id;
    this.preventEnterSubmit = props.preventEnterSubmit ? props.preventEnterSubmit : false;
    this.encType = this.encodingTypes[props.encType];
    this.handleSubmit = props.handleSubmit;
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
  }

  handleOnKeyPress(e) {
    if ((e.which === 13) && (this.preventEnterSubmit)) {
      e.preventDefault();
    }
  }

  render() {
    return (<form id={this.id} onSubmit={this.handleSubmit} encType={this.encType} onKeyPress={this.handleOnKeyPress}>{this.props.render}</form>)
  }
}

export default withChildren(Form);
