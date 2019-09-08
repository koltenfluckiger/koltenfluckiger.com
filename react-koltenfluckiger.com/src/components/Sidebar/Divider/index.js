import React, {Component} from 'react';

import Icon from '../Icon';

class Divider extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='sidebar-links'>
      <Icon variant='fas fa-minus divider' />
    </div>
    )
  }
}

export default Divider;
