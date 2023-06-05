import { combineReducers } from 'redux';
import { getDataReducer,  getOrderReducer} from './api';
import { itemReducer, modalReducer} from './burger-ingredients';
import { ingredientMoveReducer} from './burger-constructor';

export const rootReducer = combineReducers({
  data: getDataReducer,
  order: getOrderReducer,
  item: itemReducer,
  open: modalReducer,
  ingredients: ingredientMoveReducer, 
});