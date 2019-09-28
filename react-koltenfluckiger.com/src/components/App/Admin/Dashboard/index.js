import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }
  async componentDidMount(){
    try {
    const response = await fetch('/admin/dashboard');
    console.log(response);
    } catch {
      console.log('Error');
    }
  }

  render() {
    return (
      <h1>Dashboard</h1>
    )
  }
}

export default Dashboard;
