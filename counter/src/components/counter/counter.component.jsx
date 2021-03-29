import React, { useState } from 'react';
import './counter.styles.scss';
import Button from './../custom-button/custom-button.component';

const Counter = () => {
  let [counter, setCounter] = useState(0);

  const onIncrementClick = () => setCounter(counter + 1);

  const onDecrementClick = () => {
    counter <= 0 ? setCounter(0) : setCounter(counter - 1);
  };

  const onResetClick = () => setCounter(0);

  return (
    <div className='counter__container'>
      <div className={`counter ${counter % 2 ? 'even' : 'odd'}`}>{counter}</div>
      <Button
        className='button button--increment'
        onClickHandle={onIncrementClick}
      >
        Increment
      </Button>
      <Button className='button button--reset' onClickHandle={onResetClick}>
        Reset
      </Button>
      <Button
        className='button button--decrement'
        onClickHandle={onDecrementClick}
      >
        Decrement
      </Button>
    </div>
  );
};

export default Counter;
