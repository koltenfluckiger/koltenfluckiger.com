import React, {Component} from 'react';
import $ from "jquery";
import ClassMapper from "sass-css-modules-class-mapper";

import PropTypes from 'prop-types';

import styles from './input.module.css';
class Input extends React.PureComponent {

  constructor(props) {
    super(props);
    this.id = props.id;
    this.variant = ClassMapper.map(styles, props.variant);
    this.required = props.required;
    this.name = props.name;
    this.autoComplete = props.autoComplete;
    this.type = props.type;
    this.placeholder = props.placeholder;
    this.disabled = props.disabled;
    this.defaultValue = props.defaultValue;

    this.onInput = props.onInput;
    this.onKeyPress = props.onKeyPress;
    this.onBlur = props.onBlur;
    this.inputRef = props.inputRef;
  }

  render() {
    return (
      this.required
      ? (<input ref={this.inputRef} onChange={this.onChange} onBlur={this.onBlur} onKeyPress={this.onKeyPress} onInput={this.onInput} id={this.id} className={this.variant} name={this.name} autoComplete={this.autoCompleteOn} type={this.type} placeholder={this.placeholder} disabled={this.disabled} defaultValue={this.defaultValue} required="required"/>)
      : (<input ref={this.inputRef} onChange={this.onChange} onBlur={this.onBlur} onKeyPress={this.onKeyPress} onInput={this.onInput} id={this.id} className={this.variant} name={this.name} autoComplete={this.autoCompleteOn} type={this.type} placeholder={this.placeholder} disabled={this.disabled} defaultValue={this.defaultValue}/>))
  }
}

export default Input;
