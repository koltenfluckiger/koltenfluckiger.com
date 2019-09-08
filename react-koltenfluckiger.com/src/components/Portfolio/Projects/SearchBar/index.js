import React, {Component} from 'react';

import './style.scss';

class SearchBar extends Component {

  render() {
    return (
      <div className='search-bar'>
        <span className='input-group-text'><i class="fas fa-search"></i></span>
      <input id='project-search'></input>
    </div>
  )
  }
}

export default SearchBar;
