import React, {Component} from 'react';

import './style.scss';

class SearchBar extends Component {

  render() {
    return (<div className='search-bar'>
      <span className='search-bar-input-group-text'>
        <i className='fas fa-search'></i>
      </span>
      <input id='project-search' placeholder='Search' autoComplete='off'></input>
      <span className='search-bar-input-group-text'>
        <i className='fa fa-lg fa-times'></i>
      </span>
    </div>)
  }
}

export default SearchBar;
