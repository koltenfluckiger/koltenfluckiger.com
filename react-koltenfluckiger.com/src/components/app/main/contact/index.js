import React, {Component, Fragment} from "react";
import {Router, Route, Redirect} from "react-router-dom";
import {withRouter} from "react-router";
import {
  BackButton,
  Button,
  ContentCard,
  Container,
  Form,
  SubContainer,
  Status,
  Input,
  Label,
  Title,
  TextArea
} from "../../../common";
import AxiosHandler from "axios-api-handler";

import styles from "./contact.module.css";

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      success: false,
      emailIsValid: true,
      nameIsValid: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFormInput = this.validateFormInput.bind(this);
  }

  validateFormInput(e) {
    if (e.target.value.length === 0){return false};
    switch (e.target.name) {
      case "email":
        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
        this.setState({emailIsValid: emailIsValid});
        break;
      case "name":
        const nameIsValid = /^[a-zA-Z]+$/.test(e.target.value);
        this.setState({nameIsValid: nameIsValid});
        break;
      default:
        break;
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const payload = {
      name: name,
      email: email,
      message: message
    }

    try {
      const response = await AxiosHandler.post("/api/contact/email/send", payload, {type: "json"});
      if (response.data.success) {
        this.setState({success: true});
        setTimeout(() => {
          this.props.history.go(this.props.location.pathname);
        }, 4000);
      } else {
        throw new Error();
      }
    } catch  {
      this.setState({error: true});
      setTimeout(() => {
        this.props.history.go(this.props.location.pathname);
      }, 4000);
    }
  }

  render() {

    return (<Container>
      <SubContainer>
        <ContentCard>
          <BackButton/>
          <div style={{padding: "10px 0"}}>
            <h2>Let's get in touch!</h2>
            <h6>Send me a message with any inquires you may have.</h6>
          </div>
          <div className={styles.contactFormContainer}>
            <Form encType="urlEncoded" handleSubmit={this.handleSubmit}>
                <Label text="Name:" for="name"/>
                <div className={styles.inputContainer}>
                  <Input id="name" onBlur={this.validateFormInput} type="text" name="name" variant={{classes: "contactInput"}} autoComplete="off" required></Input>
                  {
                    (!this.state.nameIsValid)
                      ? <Status text="Please check that the name contains no numbers and try again." type="error"/>
                      : <Fragment></Fragment>
                  }
                </div>
                <Label text="Email:" for="email"/>
                <div className={styles.inputContainer}>
                  <Input id="email" onBlur={this.validateFormInput} type="email" name="email" variant={{classes: "contactInput"}} autoComplete="off" required></Input>
                  {
                    (!this.state.emailIsValid)
                      ? <Status text="Please check that the email is valid and try again." type="error"/>
                      : <Fragment></Fragment>
                  }
                </div>
                <Label text="Message:" for="message"/>
                <div className={styles.inputContainer}>
                  <TextArea name="message" rows="5" variant={{classes: "contactTextArea"}} autoComplete="off" maxLength="300" required="required"/>
                </div>
              <div className={styles.buttonsContainer}>
                <Button type="submit" variant={{classes: "mdm button green"}} text="Send Message"/>
                <Button type="button" variant={{classes: "mdm button green space-left"}} onClick={() => {window.location.href="mailto:koltenfluckiger@gmail.com"}} text="Email Directly"></Button>
              </div>
            </Form>
            <div>
              {
                this.state.success
                  ? <Status text="Your message was sent successfully" type="success"/>
                  : <Fragment></Fragment>
              }
              {
                this.state.error
                  ? <Status text="Your messsage was not sent successfully. Please try again later." type="error"/>
                  : <Fragment></Fragment>
              }
            </div>
          </div>
        </ContentCard>
      </SubContainer>
    </Container>)
  }
}
export default withRouter(Contact);
