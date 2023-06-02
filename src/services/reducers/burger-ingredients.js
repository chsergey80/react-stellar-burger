import {
  ITEM_OPEN,
  ITEM_CLOSE,
  MODAL_OPEN,
  MODAL_CLOSE
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