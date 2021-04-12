import React from 'react';

import './button.styles.scss';

const Button = (props) => {
  return (
    <button
      id={props.id}
      className={`button ${props.className}`}
      onClick={props.handleClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
