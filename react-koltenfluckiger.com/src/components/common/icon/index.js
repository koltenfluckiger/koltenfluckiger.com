import React, {Component, Fragment} from "react";
import ClassMapper from "sass-css-modules-class-mapper";

import styles from './icon.module.css';

class Icon extends Component {

  constructor(props) {
    super(props);
    this.variant = ClassMapper.map(styles, props.variant);
    this.sidebarIcon = props.sidebarIcon;
    this.onClick = props.onClick;
    this.onChange = props.onChange;
  }

  render() {
    return (<Fragment>
      {this.sidebarIcon ? <span style={{
              width: "7.5rem",
              textAlign: "center"
            }}>
            <i style={{
                textAlign: "center"
              }} onClick={this.onClick} onChange={this.onChange} className={this.variant}></i>
          </span>
        : <i style={{
              textAlign: "center"
            }} onClick={this.onClick} onChange={this.onChange} className={this.variant}></i>
    }
  </Fragment>)
  }
}

export default Icon;
