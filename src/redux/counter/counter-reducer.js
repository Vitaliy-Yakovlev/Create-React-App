import { combineReducers } from 'redux';
import * as actionTypes from './counter-types';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 1, actions) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
