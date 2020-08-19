import React, {Component} from "react";
import {withRouter} from "react-router";
import {
  BackButton,
  Button,
  ContentCard,
  Container,
  FadingSeperator,
  Seperator,
  SubContainer
} from '../../../common';

import AvatarSource from "../.././../../static/avatar-config";

import styles from "./about.module.css";

class About extends React.PureComponent {

  render() {
    return (<Container>
      <SubContainer>
        <ContentCard>
          <BackButton/>
          <div className={styles.aboutImageContainer}>
            <img alt="avatar" className={styles.aboutMeAvatar} src={AvatarSource}/>
          </div>
          <h2>About Me</h2>
          <FadingSeperator/>
          <div className="about-me-container">
            <p style={{padding: "1rem 0"}}>Hello, I'm Kolten!</p>
            <br/>
            <br/>
            <p style={{padding: "1rem 0"}}>I am a 26 year old software developer from Boise, Idaho. I enjoy and love programming! It's fun to create something from nothing with only an idea. I want to create a career out of my passion for software development.</p>
            <br/>
            <br/>
            <p style={{padding: "1rem 0"}}>I've been developing software for 3+ years now. I initially started out with iOS applications with <b>Swift</b>. I then started with <b>Python</b>, and <b>Objective-C</b>. I use Python daily at my current place of work developing plugins and scripts. I started with Objective-C to create tweaks for jailbroken iOS devices.</p>
            <br/>
            <br/>
            <p style={{padding: "1rem 0"}}>After that I decided to look into Full Stack Development. I decided on the <b>MERN</b> stack as <b>MongoDB</b> is easy to use, uses JSON-like Objects which makes it an easy fit for web development. <b>Express</b> is minimal and flexible, fast, easy to use. <b>React</b> as it is an easy switch to React Native for mobile development, reuseable components for Front-End rendering, universal, and fast. <b>Node</b> offers scalability, fast performance, and freedom to develop.</p>
            <br/>
            <br/>
            <p style={{padding: "1rem 0"}}>When I'm not programming I'm usually at the gym, hanging out with my friends, or traveling!</p>
            <br/>
            <br/>
            <p style={{padding: "1rem 0"}}>I learn and use new technologies in the projects you see listed on my website.</p>
            <br/>
            <br/>
            <p style={{padding: "1rem 0"}}>This website was dedicated to showcase my skills and give more an idea about my work. The idea is a portfolio that I can use a CMS to update and add new content.</p>
            <br/>
          </div>
          <a className={styles.resumeLink} href="/assets/Kolten Fluckiger - Resume.pdf">Resume</a>
        </ContentCard>
      </SubContainer>
    </Container>)
  }
}

export default withRouter(About);
