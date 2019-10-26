import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {Input, Button, Label, Title} from '../../common';
import {ApiHandler} from '../../../utils';

import "./style.scss";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isError: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    const secretKey = e.target.secretKey.value;

    const payload = {
      username: username,
      password: password,
      secretKey: secretKey
    };

    try {
      const response = await ApiHandler.post('/admin/login', "json",  payload);
      if (response.data.success) {
        this.props.history.push('/admin/dashboard');
      }
      else {
        throw new Error();
      }
    } catch(err) {
      this.setState({isError: true});
    }
  }

  render() {
    return (<div className="login-container">
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} method="post" encType="application/x-www-form-urlencoded">
          <div className="login-form">
              <div className="group">
                <Label for="user" variant="login-label" text="Username"/>
                <Input id="user" type="text" variant="input" name="username"/>
              </div>
              <div className="group">
                <Label for="password" variant="login-label" text="Password"/>
                <Input id="password" type="password" variant="input" name="password"/>
              </div>
              <div className="group">
                <Label for="secretKey" variant="login-label" text="Secret Key"/>
              <Input id="secretKey" type="password" variant="input" name="secretKey"/>
              </div>
              <div className="group">
                <Button type="submit" variant="button" text="Sign In"/>
              </div>
              {
                this.state.isError
                  ? <div className="error-input-container error">There was an issue with the login. Please try again.</div>
                  : <></>
              }
            </div>
        </form>
      </div>
    </div>)
  }
}

export default Login;
