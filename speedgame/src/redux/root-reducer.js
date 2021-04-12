import { combineReducers } from 'redux';
import circleReducer from './circle-reducer';
import scoreReducer from './score-reducer';
import gameReducer from './game-reducer';

export default combineReducers({
  circles: circleReducer,
  score: scoreReducer,
  isGameOn: gameReducer,
});
