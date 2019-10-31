import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './tagger.module.scss';

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
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.compileTags = this.compileTags.bind(this);

    this.tags = [];
  }

  componentDidMount() {
    this.tagInput = document.getElementById(this.id);
    this.tagsContainer = this.tagInput.parentNode.children[0];
  }

  static getDerivedStateFromProps(props, state) {
    if (props.whiteListTags !== state.whiteListTags) {
      return {whiteListTags: props.whiteListTags}
    }
    return null;
  }

  handleOnKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.checkInput(e);
    } else if (e.key === " " && !this.options.allow_spaces) {
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
    if (e.target.value.length === 0)
      return false;
    if (this.options.onlyWhiteList && this.checkWhiteList()) {
      this.setupTag();
    } else if (!this.options.onlyWhiteList) {
      this.setupTag();
    }
  }

  checkWhiteList() {
    const tag = this.tagInput.value;
    var tagFound = false;
    for (const whiteListTag of this.state.whiteListTags) {
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
    this.compileTags();
  }
  compileTags() {
    this.tagInput.setAttribute("data-tags", this.tags);
  }

  render() {
    return (<div className="form-control tagger-container">
      <div className="tagger-tags-container"></div>
      <input onInput={this.handleOnInput} onKeyPress={this.handleOnKeyPress} onBlur={this.handleOnBlur} id={this.id} name={this.name} className={this.variant} data-tags="" placeholder={this.placeholder}/>
    </div>)
  }
}

export default Tagger;
