import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {BrowserDetect} from '../../../../utils';

import './style.scss';

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
    switch (e.target.name) {
      case 'email':
        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
        this.setState({emailIsValid: emailIsValid});
        break;
      case 'name':
        const nameIsValid = /^[a-zA-Z]+$/.test(e.target.value);
        this.setState({nameIsValid: nameIsValid});
        break;
      default:
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    fetch('/contact/email/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name, email: email, message: message})
    }).then(response => {
      this.setState({success: true});
      setTimeout(() => {
        this.props.history.push("/");
      }, 4000);
    }).catch((err, message) => {
      this.setState({error: true});
      setTimeout(() => {
        this.props.history.push("/contact");
      }, 4000);
    });
  }

  render() {
    return (<div className='contact-container'>
      <div className='contact-card'>
        <div className='contact-link-container'>
          <a href='/' className='back-button'>
            <i className='fas fa-arrow-left'></i>
          </a>
        </div>
        <div className='contact-card-content'>
          <h2>Let's get in touch!</h2>
          <h6>Send me a message with any inquires you may have.</h6>
        </div>
        <div className='contact-form-container'>
          <form id='email-form' onSubmit={this.handleSubmit} method='post' encType='application/x-www-form-urlencoded'>
            <div>
              <label className='field-label'>Name:</label>
              <div className='contact-input-container'>
                <input onBlur={this.validateFormInput} type='text' name='name' className='contact-field-input' autoComplete='off' required="required"></input>
                {
                  (!this.state.nameIsValid)
                    ? <div className='error-input-container error'>
                        Please check that the name contains no numbers and try again.
                      </div>
                    : <></>
                }
              </div>
            </div>
            <div>
              <label className='field-label'>Email:</label>
              <div className='contact-input-container'>
                <input onBlur={this.validateFormInput} type='email' name='email' className='contact-field-input' autoComplete='off' required="required"></input>
                {
                  (!this.state.emailIsValid)
                    ? <div className='error-input-container error'>
                        Please check that the email is valid and try again.
                      </div>
                    : <></>
                }
              </div>
            </div>
            <div>
              <label className='field-label'>Message:</label>
              <div className='contact-input-container'>
                <textarea name='message' rows='5' className='contact-message-field' autoComplete='off' maxLength="300" required="required"></textarea>
              </div>
            </div>
            <div className='buttons-container'>
              <button type='submit' className='button green'>Send Message</button>
              <a href='mailto:koltenfluckiger@gmail.com' className='button blue'>Email Directly</a>
            </div>
          </form>
          <div>
            {
              this.state.success
                ? <div className='status-container show success'>
                    <i className="fa fa-check status-icon"></i>
                    Your message was sent successfully!
                  </div>
                : <></>
            }
            {
              this.state.error
                ? <div className='status-container show error'>
                    <i className="fa fa-times-circle status-icon"></i>
                    Your messsage was not sent successfully.Please try again later.
                  </div>
                : <></>
            }
          </div>
        </div>
      </div>
    </div>)
  }
}
export default Contact;
