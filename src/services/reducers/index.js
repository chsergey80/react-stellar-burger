import { combineReducers } from 'redux';
import { getDataReducer,  getOrderReducer} from './api';
import { itemReducer, madalReducer} from './burger-ingredients';
import { ingredientMoveReducer} from './burger-constructor';

export const rootReducer = combineReducers({
  data: getDataReducer,
  order: getOrderReducer,
  item: itemReducer,
  open: madalReducer,
  ingredients: ingredientMoveReducer, 
});