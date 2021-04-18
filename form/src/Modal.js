import React from 'react';

import './Modal.css';

const Modal = (props) => {
  const { state, onFormClick, onOverlayClick } = props;
  const handleOverlayClick = (e) => {
    const overlayElement = document.querySelector('.overlay');
    if (e.target === overlayElement) {
      onOverlayClick();
    }
  };

  return (
    <div className='overlay' onClick={handleOverlayClick}>
      <div className='modal'>
        <div className='form-control'>
          <label className='form-label'>First name</label>
          <div className='form-input'>{state.firstname}</div>
        </div>
        <div className='form-control'>
          <label className='form-label'>Last name</label>
          <div className='form-input'>{state.lastname}</div>
        </div>
        <div className='form-control'>
          <label className='form-label'>Phone number</label>
          <div className='form-input'>{state.phoneNumber}</div>
        </div>
        <div className='form-control'>
          <label className='form-label'>Role</label>
          <div className='form-input'>{state.role}</div>
        </div>
        <div className='form-control'>
          <label className='form-label'>Message</label>
          <div className='form-input'>{state.message}</div>
        </div>
        <div className='form-control'>
          <button className='button' onClick={onFormClick}>
            OK
          </button>
          <button className='button' onClick={onFormClick}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
