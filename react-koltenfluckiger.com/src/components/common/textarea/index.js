import React, {Component} from 'react';
import ClassMapper from "sass-css-modules-class-mapper";

import styles from "./textarea.module.css";

class TextArea extends React.PureComponent {

  constructor(props) {
    super(props);
    this.variant = ClassMapper.map(styles, props.variant);
  }

  render() {
    const {variant} = this;
    const {name, rows, required, maxLength, placeholder, defaultValue} = this.props;

    if(required){
      return <textarea name={name} rows={rows} className={variant} autoComplete="off" maxLength={maxLength} placeholder={placeholder} required defaultValue={defaultValue} />
    }
    else{
      return <textarea name={name} rows={rows} className={variant} autoComplete="off" maxLength={maxLength} placeholder={placeholder} defaultValue={defaultValue} />
    }
  }
}

export default TextArea;
