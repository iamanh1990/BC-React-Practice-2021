import React from 'react';

import CircleContainer from './components/circles-container.component';
import Button from './components/button.component';
import './App.css';

const App = (props) => {
  return (
    <div className='container'>
      <h1 className='heading--main'>SpeedGame In React</h1>
      <div className='buttons-container'>
        <Button id='start-btn' className='button--start'>
          Start Game
        </Button>
        <Button id='end-btn' className='button--end'>
          End Game
        </Button>
      </div>
      <CircleContainer />
      <div className='score-container'>Score Here</div>
    </div>
  );
};

export default App;
