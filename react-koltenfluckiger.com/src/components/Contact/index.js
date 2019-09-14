import React, {Component} from 'react';

import './style.scss';

class Contact extends Component {

  render() {
    return (<div className='contact-container'>
      <div className='contact-card'>
        <div className='contact-link-container'>
          <a href="/" className="back-button">
            <i className="fas fa-arrow-left"></i>
          </a>
        </div>
        <div className='contact-card-content'>
          <h2>Let's get in touch!</h2>
          <h6>Send me a message with any inquires you may have.</h6>
        </div>
        <div className='contact-form-container'>
          <form action='/email' method='post'>
            <div>
              <label className='field-label'>Name:</label>
              <input type="text" name="name" className='contact-field-input' autoComplete='off'></input>
            </div>
            <div>
              <label className='field-label'>Email:</label>
              <input type="text" name="email" className='contact-field-input' autoComplete='off'></input>
            </div>
            <div>
              <label className='field-label'>Message:</label>
              <textarea name="message" rows='5' className='contact-message-field' autoComplete='off'></textarea>
            </div>
            <div className='buttons-container'>
              <button type='submit' className='button green'>Send Message</button>
              <a href='mailto:koltenfluckiger@gmail.com' className='button blue'>Email Directly</a>
            </div>
          </form>
        </div>
      </div>
    </div>)
  }
}

export default Contact;
