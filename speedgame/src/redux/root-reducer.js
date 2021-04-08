import { combineReducers } from 'redux';
import circleReducer from './circle-reducer';

export default combineReducers({
  circles: circleReducer,
});
