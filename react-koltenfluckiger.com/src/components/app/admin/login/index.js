import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {Form, Input, Button, Label, Title, Status} from '../../../common';
import AxiosHandler from "axios-api-handler";

import styles from "./login.module.css";

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
      const response = await AxiosHandler.post('/auth/login',  payload, {type: "json"});
      if (response.data.success) {
        this.props.history.push("/admin/dashboard")
      }
    } catch(err) {
      this.setState({isError: true});
    }
  }

  render() {
    return (<div className={styles.loginContainer}>
      <div className={styles.loginFormContainer}>
        <Form encType="urlEncoded" handleSubmit={this.handleSubmit}>
          <div className={styles.loginForm}>
              <div className={styles.group}>
                <Label for="user" variant={{classes: "loginLabel"}} text="Username"/>
                <Input id="user" type="text" variant={{classes: "loginInput"}} name="username"/>
              </div>
              <div className={styles.group}>
                <Label for="password" variant={{classes: "loginLabel"}} text="Password"/>
                <Input id="password" type="password" variant={{classes: "loginInput"}} name="password"/>
              </div>
              <div className={styles.group}>
                <Label for="secretKey" variant={{classes: "loginLabel"}} text="Secret Key"/>
              <Input id="secretKey" type="password" variant={{classes: "loginInput"}} name="secretKey"/>
              </div>
              <div className={styles.group}>
                <Button id="login-submit" type="submit" variant={{classes: "button-form-control button green"}} text="Sign In"/>
              </div>
              {
                this.state.isError
                  ? <Status type="error" text="There was an issue with the login. Please try again."/>
                  : <Fragment></Fragment>
              }
            </div>
        </Form>
      </div>
    </div>)
  }
}

export default Login;
