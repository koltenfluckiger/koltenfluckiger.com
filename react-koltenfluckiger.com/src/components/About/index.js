import React, {Component} from 'react';

import AvatarSource from '../../static/avatar-config';

import './style.scss';

class About extends Component {

  render() {
    return (<div className='about-container'>
      <div className='about-card'>
        <div className='about-link-container'>
          <a href="/" className="back-button">
            <i className="fas fa-arrow-left"></i>
          </a>
        </div>
        <div className='about-image-container'>
          <img className='about-me-avatar' src={AvatarSource} />
        </div>
        <h2>About Me</h2>
        <div className='about-me-container'>
          <p>Hello, I'm Kolten</p>
        </div>
        <div className='about-buttons-container'></div>
      </div>
    </div>)
  }
}

export default About;
