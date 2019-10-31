import React, {Component} from "react";
import PropTypes from "prop-types";

import './icon.module.scss';

class Icon extends Component {

  static propTypes = {
    variant: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.variant = this.props;
  }

  render() {
    return (<span>
      <i onChange={this.props.onChange} className={this.props.variant}></i>
    </span>)
  }
}

export default Icon;
