import React, { Component } from 'react';

import Modal from './Modal';
import './App.css';

class App extends Component {
  state = {
    firstname: '',
    lastname: '',
    phoneNumber: '',
    role: '',
    message: '',
    hiddenModal: true,
  };

  handleInputChange = (e) => {
    this.setState((prevState) => (prevState[e.target.name] = e.target.value));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState(
      (prevState) => (prevState.hiddenModal = !prevState.hiddenModal)
    );
  };

  handleOverlayClick = () => {
    this.setState(
      (prevState) => (prevState.hiddenModal = !prevState.hiddenModal)
    );
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.hiddenModal && (
          <Modal
            state={this.state}
            onFormClick={this.handleFormSubmit}
            onOverlayClick={this.handleOverlayClick}
          />
        )}
        <form className='form' onSubmit={this.handleFormSubmit}>
          <div className='form-control'>
            <label className='form-label' htmlFor='firstname'>
              First name
            </label>
            <input
              type='text'
              id='firstname'
              className='form-input'
              name='firstname'
              onChange={this.handleInputChange}
              value={this.state.firstname}
            />
          </div>

          <div className='form-control'>
            <label className='form-label' htmlFor='lastname'>
              Last name
            </label>
            <input
              type='text'
              id='lastname'
              className='form-input'
              name='lastname'
              onChange={this.handleInputChange}
              value={this.state.lastname}
            />
          </div>

          <div className='form-control'>
            <label className='form-label' htmlFor='phoneNumber'>
              Phone number
            </label>
            <input
              type='text'
              id='phoneNumber'
              className='form-input'
              name='phoneNumber'
              onChange={this.handleInputChange}
              value={this.state.phoneNumber}
            />
          </div>

          <div className='form-control'>
            <label className='form-label' htmlFor='role'>
              Role
            </label>
            <select
              id='role'
              className='form-input'
              name='role'
              onChange={this.handleInputChange}
              value={this.state.role}
            >
              <option value='teacher'>Teacher</option>
              <option value='student'>Student</option>
              <option value='teacher'>Janitor</option>
            </select>
          </div>

          <div className='form-control'>
            <label className='form-label' htmlFor='message'>
              Message
            </label>
            <textarea
              type='text'
              rows='5'
              id='message'
              className='form-input'
              name='message'
              onChange={this.handleInputChange}
              value={this.state.message}
            ></textarea>
          </div>

          <div className='input-group'>
            <input type='submit' value='Send' name='send' />
          </div>
        </form>

        <h2>Check Your Input</h2>
        <div className='note-container'>
          <div className='form-control'>
            <label className='form-label'>First name</label>
            <div className='form-input'>{this.state.firstname}</div>
          </div>
          <div className='form-control'>
            <label className='form-label'>Last name</label>
            <div className='form-input'>{this.state.lastname}</div>
          </div>
          <div className='form-control'>
            <label className='form-label'>Phone number</label>
            <div className='form-input'>{this.state.phoneNumber}</div>
          </div>
          <div className='form-control'>
            <label className='form-label'>Role</label>
            <div className='form-input'>{this.state.role}</div>
          </div>
          <div className='form-control'>
            <label className='form-label'>Message</label>
            <div className='form-input'>{this.state.message}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
