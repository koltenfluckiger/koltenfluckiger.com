import React, {Component} from 'react';

import './style.scss';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      secretKey: "",
      rememberMe: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    const secretKey = e.target.secretKey.value;
    const rememberMe = e.target.rememberMe.checked;

    fetch('/admin/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password, secretKey: secretKey})
    }).then(response => {
      console.log('Logged in successfully', response);
    }).catch((err, message) => {
      console.log(err, message);
    })
  }

  render() {
    return (<div className='login-container'>
      <div className='login-form-container'>
        <div>
          <h2>Sign In</h2>
        </div>
        <div className="hr"></div>
        <form onSubmit={this.handleSubmit} method='post' encType='application/x-www-form-urlencoded'>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="login-label">Username</label>
                <input onChange={this.handleInputChange} id="user" type="text" className="input" name='username'/>
              </div>
              <div className="group">
                <label htmlFor="password" className="login-label">Password</label>
                <input onChange={this.handleInputChange} id="password" type="password" className="input" name="password"/>
              </div>
              <div className="group">
                <label htmlFor="secretKey" className="login-label">Secret Key</label>
                <input onChange={this.handleInputChange} id="secretKey" type="password" className="input" name="secretKey"/>
              </div>
              <div className="group">
                <input onChange={this.handleInputChange} id="check" type="checkbox" className="check" name='rememberMe'/>
                <label htmlFor="check">Keep me Signed in</label>
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>)
  }
}

export default Login;
