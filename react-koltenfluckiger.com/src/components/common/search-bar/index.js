import React, {Component} from "react";
import Input from "../input";
import Icon from "../icon";

import styles from "./search-bar.module.css";

class SearchBar extends React.PureComponent {

  constructor(props) {
    super(props);
    this.value = props.value;
    this.search = props.search;
    this.clearText = this.clearText.bind(this);
  };

  clearText() {
    this.searchInput.value = "";
  }

  render() {
    return (<div className={styles.searchBar}>
      <span className={styles.searchBarInputGroupText}>
        <Icon variant="fas fa-search"/>
      </span>
      <Input onInput={this.search} inputRef={el => (this.searchInput = el)} id={styles.projectSearch} placeholder="Search" autoComplete="off"/>
      <span className={styles.searchBarInputGroupText}>
        <Icon onClick={this.clearText} variant={{classes: "delete-icon sml fa fa-times"}}/>
      </span>
    </div>)
  }
}

export default SearchBar;
