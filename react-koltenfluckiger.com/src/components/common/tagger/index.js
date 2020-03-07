import React, {Component} from 'react';
import ClassMapper from "sass-css-modules-class-mapper";

import Input from "../input";
import Button from "../button";

import styles from './tagger.module.css';

class Tagger extends React.PureComponent {

  constructor(props) {
    super(props);
    this.variant = props.variant;
    this.id = props.id;
    this.name = props.name;
    this.placeholder = props.placeholder;
    this.tagInput = null;
    this.tagsContainer = null;
    this.options = props.options;
    this.defaultTags = props.options.defaultTags ? props.options.defaultTags : [];
    this.whiteListTags = props.whiteListTags;
    this.tags = []

    this.handleOnInput = this.handleOnInput.bind(this);
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.compileTags = this.compileTags.bind(this);
  }

  componentDidMount() {
    this.tagInput = document.getElementById(this.id);
    this.tagsContainer = this.tagInput.parentNode.children[0];
    for(const tag of this.defaultTags){
      if(tag.title){
        this.setupTag(tag.title);
      }
      else{
        this.setupTag(tag);
      }
    }
  }

  handleOnKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.checkInput(e);
    } else if (e.key === " " && !this.options.allow_spaces) {
      e.preventDefault();
      this.checkInput(e);
    } else if (e.key === ",") {
      e.preventDefault();
      this.checkInput(e);
    }
  }

  handleOnBlur(e) {
    e.preventDefault();
    this.checkInput(e);
  }

  handleOnInput(e) {

  }

  checkInput(e) {
    if (e.target.value.length === 0){
      return false;
    }
    const val = e.target.value;
    if (this.options.onlyWhiteList && this.checkWhiteList()) {
      this.setupTag(val);
    } else if (!this.options.onlyWhiteList) {
      this.setupTag(val);
    }
  }

  checkWhiteList() {
    if ((!this.whiteListTags)){
      return
    };
    const tag = this.tagInput.value;
    var tagFound = false;

    for (const whiteListTag of this.whiteListTags) {
      if (whiteListTag.title === tag) {
        return true;
      } else {
        tagFound = false;
      }
    }
    return tagFound;
  }

  createButton() {
    const xButton = document.createElement("i");
    xButton.setAttribute("class", styles.xButton + " fa fa-times");
    xButton.onclick = this.removeTag;
    return xButton;
  }

  createTag(val) {
    const tagValue = val;
    const tag = document.createElement('span');
    tag.setAttribute('class', styles.taggerTag);
    tag.setAttribute('data-tag', tagValue);
    tag.innerText = tagValue;
    return tag;
  }

  setupTag(val) {
    const button = this.createButton();
    const tag = this.createTag(val);
    tag.appendChild(button);
    this.tags.push(tag.dataset.tag);
    this.tagsContainer.appendChild(tag);
    this.tagInput.value = "";
    this.compileTags();
  }

  removeTag(e) {
    const tag = e.target.parentNode.children[0];
    this.tags.splice(this.tags.indexOf(tag.dataset.tag), 1);
    this.tagsContainer.removeChild(e.target.parentNode);
    this.compileTags();
  }

  compileTags() {
    this.tagInput.setAttribute("data-tags", this.tags);
  }

  render() {
    return (<div className={ClassMapper.map(styles, {classes: "admin-input taggerContainer"})}>
      <div id="tagger-tag-container" className={styles.taggerTagsContainer}/>
      <Input onInput={this.handleOnInput} onKeyPress={this.handleOnKeyPress} onBlur={this.handleOnBlur} id={this.id} name={this.name} variant={this.variant} data-tags="" placeholder={this.placeholder}/>
    </div>)
  }
}

export default Tagger;
