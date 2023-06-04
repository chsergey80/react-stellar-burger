import {
  ITEM_OPEN,
  ITEM_CLOSE,
  MODAL_OPEN,
  MODAL_CLOSE,
  BUN_MOVE,
  SAUCE_FILLING_MOVE,
  ELEMENT_REMOVE,
  SORT_INGREDIENTS,
} from '../actions/burger-ingredients';

const initialStateItem = {ingredient: null};

export const itemReducer = (state = initialStateItem, action) => {
  switch (action.type) {
    case ITEM_OPEN: {
      return {
        ...state,
        ingredient: action.ingredient}}
      case  ITEM_CLOSE: {
        return {
          ...state, 
          ingredient: null}}
      default: {return state}}
  }

const initialStateModal = {isOpen: false};

export const madalReducer = (state = initialStateModal, action) => {
  switch (action.type) {
    case MODAL_OPEN: {
      return {
        ...state,
        isOpen: true}}
      case  MODAL_CLOSE: {
        return {
          ...state, 
          isOpen: false}}
      default: {return state}}
  }

  const initialStateIngredients = {
    ingredients: [], 
    bun: null};

  export const ingredientMoveReducer = (state = initialStateIngredients, action) => {
    switch (action.type) {
      case BUN_MOVE: {
        return {
          ...state,
          bun: action.bun}}
        case SAUCE_FILLING_MOVE: {
          return {
            ...state,
            ingredients: [...state.ingredients, {...action.ingredients, id: action.id}]}}
          case ELEMENT_REMOVE: {
            return {
              ...state,
              ingredients: [...state.ingredients].filter((item) => item.id !== action.id)}}
        default: {return state}}
  }