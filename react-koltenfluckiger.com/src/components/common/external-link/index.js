import React, {Component} from "react";
import Icon from "../icon";

import PropTypes from "prop-types";

import './external-link.module.scss';

class ExternalLink extends Component {

  static propTypes = {
    href: PropTypes.string,
    variant: PropTypes.string,
    title: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.href = props.href;
    this.variant = props.variant;
    this.title = props.title;
  }

  render() {
    return (<li>
      <a href={this.href} className="sidebar-links">
          <Icon variant={this.variant}/>
      </a>
    </li>)
  }
}

export default ExternalLink;
