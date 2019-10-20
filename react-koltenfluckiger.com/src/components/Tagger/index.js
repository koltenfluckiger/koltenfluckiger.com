import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Tagger extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
    this.variant = props.variant;
    this.id = props.id;
    this.name = props.name;
    this.placeholder = props.placeholder;
    this.tagInput = null;
    this.tagsContainer = null;
    this.options = props.options;

    this.handleOnInput = this.handleOnInput.bind(this);
    this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.compileTags = this.compileTags.bind(this);

    this.tags = [];
    this.whiteListTags = props.options.whiteListTags;
  }

  componentDidMount(){
    this.tagInput = document.getElementById(this.id);
    this.tagsContainer = this.tagInput.parentNode.children[0];
  }

  handleOnKeyPress(e) {
    console.log("keypress");
    console.log(e.key);
    if (e.key === 'Enter') {
      e.preventDefault();
      if (this.options.onlyWhiteList) {
        if (this.checkWhiteList()) {
          this.setupTag();
        }
      } else {
        this.setupTag();
      }
    }
    if (e.key === " " && this.options.allow_spaces) {
      e.preventDefault();
      if (this.options.onlyWhiteList) {
        if (this.checkWhiteList()) {
          this.setupTag();
        }
      } else {
        this.setupTag();
      }
    }
  }

  handleOnInput(e) {
  }

  checkWhiteList() {
    const tag = this.tagInput.value;
    return this.whiteListTags.indexOf(tag) === -1
      ? false
      : true;
  }

  createButton() {
    const xButton = document.createElement("i");
    xButton.setAttribute("class", "x-button fa fa-times");
    xButton.onclick = this.removeTag;
    return xButton;
  }

  setupTag() {

    const button = this.createButton();
    const tag = this.createTag();

    tag.appendChild(button);
    this.state.tags.push(tag);
    this.tags.push(tag.dataset.tag);
    this.tagsContainer.appendChild(tag);
    this.tagInput.value = "";
    this.compileTags();
  }
  createTag() {
    const tagValue = this.tagInput.value;
    const tag = document.createElement('span');
    tag.setAttribute('class', 'tagger-tag');
    tag.setAttribute('data-tag', tagValue);
    tag.innerText = tagValue;
    return tag;
  }
  removeTag(e) {
    const tag = e.target.parentNode.children[0];
    this.state.tags.splice(this.state.tags.indexOf(tag), 1);
    this.tags.splice(this.tags.indexOf(tag.dataset.tag), 1);
    this.tagsContainer.removeChild(e.target.parentNode);
  }
  compileTags() {
    this.tagInput.setAttribute("data-tags", this.tags);
  }

  render() {
    return (<div className="form-control tagger-container">
      <div className="tagger-tags-container"></div>
      <input onInput={this.handleOnInput} onKeyPress={this.handleOnKeyPress} id={this.id} name={this.name} className={this.variant} data-tags="" placeholder={this.placeholder}/>
    </div>)
  }
}

export default Tagger;
