import React from 'react';

import './circle.styles.scss';

const Circle = (props) => {
  return <div className={`circle ${props.className}`}></div>;
};

export default Circle;
