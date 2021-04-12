import React from 'react';
import { connect } from 'react-redux';

import Circle from './circle.component';

const CircleContainer = (props) => {
  const { circles } = props;

  return (
    <div className='circles-container'>
      {circles.map(({ circleId, isActive }) => (
        <Circle
          key={circleId}
          circleId={circleId}
          className={isActive ? 'active' : ''}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  circles: state.circles,
});

export default connect(mapStateToProps, null)(CircleContainer);
