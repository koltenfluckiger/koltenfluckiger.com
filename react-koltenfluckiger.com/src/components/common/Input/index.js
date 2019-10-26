import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

  constructor(props) {
    super(props);
    this.id = props.id;
    this.variant = props.variant;
    this.required = props.required;
    this.name = props.name;
    this.autoComplete = props.autoComplete;
    this.type = props.type;
    this.placeholder = props.placeholder;
    this.value = props.value;
  }

  render() {
    return (<> {
      this.required
        ? <input id={this.id} className={this.variant} required name={this.name} autoComplete={this.autoCompleteOn} type={this.type} placeholder={this.placeholder} value={this.value}/>
        : <input id={this.id} className={this.variant} name={this.name} autoComplete={this.autoCompleteOn} type={this.type} placeholder={this.placeholder} value={this.value}/>
    }
  </>)
  }
}

export default Input;
