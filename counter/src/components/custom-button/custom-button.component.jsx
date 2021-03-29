import React from 'react';

const Button = ({ children, onClickHandle, ...props }) => {
  return (
    <button {...props} onClick={onClickHandle}>
      {children}
    </button>
  );
};

export default Button;
