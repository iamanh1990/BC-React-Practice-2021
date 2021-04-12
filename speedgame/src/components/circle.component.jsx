import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../redux/score-action';
import './circle.styles.scss';

const Circle = (props) => {
  const { circleId, circles, increment, decrement, isGameOn } = props;
  const handleClick = (event) => {
    const id = event.target.id;
    if (circles[id - 1].isActive === true) {
      increment();
    } else {
      decrement();
    }
  };

  return (
    <div
      id={circleId}
      className={`circle ${props.className}`}
      onClick={handleClick}
      style={{ pointerEvents: isGameOn ? 'auto' : 'none' }}
    ></div>
  );
};

const mapStateToProps = (state) => ({
  circles: state.circles,
  isGameOn: state.isGameOn,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Circle);
