import React, {Component} from 'react';
import ClassMapper from "sass-css-modules-class-mapper";
import styles from "./fading-seperator.module.css";

class FadingSeperator extends Component {

  constructor(props) {
    super(props);
    this.variant = ClassMapper.map(styles, {classes: "fading-seperator"});
  }

  render() {
    return (
      <div className={this.variant}></div>
    )
  }
}

export default FadingSeperator;
