import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Icon from "../../icon";
import styles from "./project-media.module.css";

class ProjectMedia extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
    this.screenshots = props.screenshots;
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous() {
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: (this.state.currentIndex - 1)
      });
    } else {
      this.setState({
        currentIndex: (this.screenshots.length - 1)
      });
    }
  }

  next() {
    if (this.state.currentIndex < this.screenshots.length - 1) {
      this.setState({
        currentIndex: (this.state.currentIndex + 1)
      });
    } else {
      this.setState({currentIndex: 0});
    }
  }

  render() {
    const {currentIndex} = this.state;
    return (<div className={styles.container}>
      <div className={styles.slideshowContainer}>
        <div className={styles.prevContainer}>
          <Icon onClick={this.previous} variant={{classes: "mdm fas fa-chevron-left"}}/>
        </div>
        {<img className={styles.screenshot} src={this.screenshots[currentIndex]}></img>}
        <div className={styles.nextContainer}>
          <Icon onClick={this.next} variant={{classes: "mdm fas fa-chevron-right"}}/>
        </div>
      </div>
    </div>)
  }
}

export default ProjectMedia;
