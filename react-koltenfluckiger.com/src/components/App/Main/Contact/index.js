import React, {Component} from 'react';

import './style.scss';

class Contact extends Component {

  constuctor(props){
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(e.target.value);
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
              <input id='namerqlfld' type='text' name='namerqlfld' className='contact-field-input' autoComplete='off'></input>
            </div>
            <div>
              <label className='field-label'>Email:</label>
              <input id='emailfldrql' type='text' name='emailfldrql' className='contact-field-input' autoComplete='off'></input>
            </div>
            <div>
              <label className='field-label'>Message:</label>
              <textarea id='messagerldrfl' name='messagerldrfl' rows='5' className='contact-message-field' autoComplete='off'></textarea>
            </div>
            <div className='buttons-container'>
              <button type='submit' className='button green'>Send Message</button>
              <a href='mailto:koltenfluckiger@gmail.com' className='button blue'>Email Directly</a>
            </div>
            <label className='honneybunny'></label>
            <input className='honneybunny' autoComplete='off' type='text' id='name' name='name' placeholder='Your name here'></input>
            <label className='honneybunny'></label>
            <input className='honneybunny' autoComplete='off' type='email' id='email' name='email' placeholder='Your e-mail here'></input>
            <label className='honneybunny'></label>
            <textarea id='message' className='honneybunny' name='message' rows='5' autoComplete='off'></textarea>
          </form>
        </div>
      </div>
    </div>)
  }
}

export default Contact;
