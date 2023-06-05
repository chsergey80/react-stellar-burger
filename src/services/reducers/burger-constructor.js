import {
  BUN_MOVE,
  SAUCE_FILLING_MOVE,
  ELEMENT_REMOVE,
  UPDATE_ARR_ELEMENTS
} from '../actions/actions';

const initialStateIngredients = {
  ingredients: [],
  bun: null
};

export const ingredientMoveReducer = (state = initialStateIngredients, action) => {
  switch (action.type) {
    case BUN_MOVE: {
      return {...state,
        bun: action.bun}}
    case SAUCE_FILLING_MOVE: {
      return {...state,
        ingredients: [...state.ingredients, {
          ...action.ingredients,
          id: action.id}]}}
    case ELEMENT_REMOVE: {
      return {...state,
        ingredients: [...state.ingredients].filter((item) => item.id !== action.id)}}
    case UPDATE_ARR_ELEMENTS: {
      const dragItem = [...state.ingredients][action.dragIndex]
      const hoverItem = [...state.ingredients][action.hoverIndex]
      const updatedArr = [...state.ingredients]
      updatedArr[action.dragIndex] = hoverItem
      updatedArr[action.hoverIndex] = dragItem
      return {...state,
        ingredients: updatedArr}}
    default: {return state}}
}