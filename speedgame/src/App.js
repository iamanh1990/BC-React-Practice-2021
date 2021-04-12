import React, { useState } from 'react';
import { connect } from 'react-redux';

import { changeActiveCircle, switchOffCircles } from './redux/circle-action';
import { startGame, stopGame } from './redux/game-action';
import { generateRandomNumber } from './utils/circles';
import CircleContainer from './components/circles-container.component';
import Button from './components/button.component';
import Score from './components/score.component';
import './App.css';

const App = (props) => {
  const {
    switchOffCircles,
    changeActiveCircle,
    isGameOn,
    startGame,
    stopGame,
  } = props;

  const [clearTimeoutId, setClearTimeoutId] = useState(null);

  const handleClickStart = () => {
    //start game
    startGame();

    let currentRandomNumber;
    let randomNumber = generateRandomNumber();
    let timer = 2000;
    const speed = 50;

    const speedUpTheCircle = () => {
      // update the timer
      timer -= speed;

      // update the random number
      randomNumber = generateRandomNumber();
      // check if the random number equals to the previous number, change the current number
      if (randomNumber === currentRandomNumber) {
        randomNumber = generateRandomNumber();
      }
      // store the current random Number to check later on
      currentRandomNumber = randomNumber;

      // switch-off circles
      switchOffCircles();
      // switch-on random circle
      changeActiveCircle(randomNumber);
      // call the function itself after timer of time

      const timeoutId = setTimeout(speedUpTheCircle, timer);
      setClearTimeoutId(timeoutId); //save the timeoutID in state
    };

    // trigger the circle speed up
    speedUpTheCircle();
  };

  const handleClickStop = () => {
    clearTimeout(clearTimeoutId);

    stopGame();
  };

  return (
    <div className='container'>
      <h1 className='heading--main'>SpeedGame In React</h1>
      <div className='buttons-container'>
        <Button
          id='start-btn'
          className='button--start'
          handleClick={handleClickStart}
          disabled={isGameOn}
        >
          Start Game
        </Button>
        <Button
          id='end-btn'
          className='button--end'
          handleClick={handleClickStop}
          disabled={!isGameOn}
        >
          End Game
        </Button>
      </div>
      <CircleContainer />
      <div className='score-container'>
        <Score />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isGameOn: state.isGameOn,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveCircle: (randomNum) => dispatch(changeActiveCircle(randomNum)),
  switchOffCircles: () => dispatch(switchOffCircles()),
  startGame: () => dispatch(startGame()),
  stopGame: () => dispatch(stopGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
