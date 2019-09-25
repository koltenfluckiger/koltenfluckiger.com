import React, {Component} from 'react';

import './style.scss';

class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='login-container'>
      <div>
        <h2>Login</h2>
      </div>
      <form action='/admin/login' method='post'>
        <div className='login-input-container'>
          <input className='login-field-input' type='text' name='username' placeholder='Username'/>
        </div>
        <div className='login-input-container'>
          <input className='login-field-input' type='password' name='password' placeholder='Password'/>
        </div>
        <div className='login-input-container'>
          <input className='login-field-input' type='password' name='secretKey' placeholder='Secret Key'/>
        </div>
        <div className='login-input-container'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>)
  }
}

export default Login;
