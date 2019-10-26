import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FileInput extends Component {

  constructor(props) {
    super(props);
    this.id = props.id;
    this.variant = props.variant;
    this.required = props.required;
    this.name = props.name;
    this.accept = props.accept;
    this.multiple = props.multiple;
  }

  render() {
    return (<> {
      this.required
        ? <input className={this.variant} name={this.name} multiple={this.multiple ? "multiple" : ""} required="required" type="file" id={this.id} accept={this.accept}/>
        : <input className={this.variant} name={this.name} multiple={this.multiple ? "multiple" : ""} required="required" type="file" id={this.id} accept={this.accept}/>
    }
  </>)
  }
}

export default FileInput;
