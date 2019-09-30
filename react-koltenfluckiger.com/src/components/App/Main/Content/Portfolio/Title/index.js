import React, {Component} from "react";

import "./style.scss";

class Title extends Component {

  constructor(props){
    super(props);
    this.text = props.text;
  }

  render() {
    return (
      <div className="title-container">
      <h2>{this.text}</h2>
  </div>
    )
  }
}

export default Title;
