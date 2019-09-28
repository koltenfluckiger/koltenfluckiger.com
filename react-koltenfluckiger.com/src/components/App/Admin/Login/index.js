import React, {Component} from 'react';

import './style.scss';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      secretKey: "",
      rememberMe: false,
      isError: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    const secretKey = e.target.secretKey.value;
    const rememberMe = e.target.rememberMe.checked;

    try {
    const response = await fetch('/admin/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password, secretKey: secretKey})
      })
      if (response.ok) {
          this.props.history.push("/admin/dashboard");
      }
      else {
        throw new Error();
      }
    } catch (err) {
      this.setState({isError: true});
    }
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
              {this.state.isError ? <div className='error-input-container error'>There was an issue with the login. Please try again.</div> : <></>}
            </div>
          </div>
        </form>
      </div>
    </div>)
  }
}

export default Login;
