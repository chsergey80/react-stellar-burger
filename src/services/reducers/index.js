import { combineReducers } from 'redux';
import { getDataReducer } from './api';

export const rootReducer = combineReducers({
  data: getDataReducer,
});