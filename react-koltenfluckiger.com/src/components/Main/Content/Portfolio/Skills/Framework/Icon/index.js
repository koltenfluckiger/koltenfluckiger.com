import React, {Component} from "react";
import PropTypes from "prop-types";

import "./style.scss";

class Icon extends Component {

  static propTypes = {
    variant: PropTypes.string,
    abbreviation: PropTypes.string
  }

  constructor(props) {

    super(props);
    this.variant = props.variant;
    this.abbreviation = props.abbreviation;
  }

  render() {
    return (
      <div className={this.variant}>
        {this.abbreviation}
      </div>
    )
  }
}

export default Icon;
