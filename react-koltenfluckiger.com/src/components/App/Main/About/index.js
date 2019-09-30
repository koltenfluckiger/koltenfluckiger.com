import React, {Component} from "react";

import AvatarSource from "../../../../static/avatar-config";

import "./style.scss";

class About extends Component {

  render() {
    return (<div className="about-container">
      <div className="about-card">
        <div className="about-link-container">
          <a href="/" className="back-button">
            <i className="fas fa-arrow-left"></i>
          </a>
        </div>
        <div className="about-image-container">
          <img alt="avatar" className="about-me-avatar" src={AvatarSource}/>
        </div>
        <h2>About Me</h2>
        <div className="about-me-container">
          <p>Hello, I"m Kolten!</p>
          <br/>
          <p>I am a 26 year old software developer from Boise, Idaho. I enjoy and love programming! It"s fun to create something from nothing, but an idea. I want to create a career out of my passion for software development!</p>
          <br/>
          <p>When I"m not programming I"m usually at the gym, hanging out with my friends, or traveling!</p>
        <br/>
          <p>I learn and use new technologies in the projects you see listed on my website.</p>
          <br/>
          <p>This website was dedicated to showcase my skills and give more an idea about my work. The idea is a portfolio that I can use a CMS to update and add new content.</p>
          <br/>
        </div>
      </div>
    </div>)
  }
}

export default About;
