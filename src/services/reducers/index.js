import { combineReducers } from 'redux';
import { getDataReducer,  getOrderReducer} from './api';
import { itemReducer, madalReducer, ingredientMoveReducer} from './burger-ingredients';

export const rootReducer = combineReducers({
  data: getDataReducer,
  order: getOrderReducer,
  item: itemReducer,
  open: madalReducer,
  ingredients: ingredientMoveReducer,  
});