import { getIngredients, postOrder } from '../../utils/burger-api';
export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';

export const ITEM_OPEN = 'ITEM_OPEN';
export const ITEM_CLOSE = 'ITEM_CLOSE';
export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';
export const BUN_MOVE ='BUN_MOVE';
export const SAUCE_FILLING_MOVE ='SAUCE_FILLING_MOVE';
export const ELEMENT_REMOVE ='ELEMENT_REMOVE';
export const SORT_INGREDIENTS = 'SORT_INGREDIENTS';
export const UPDATE_ARR_ELEMENTS = 'UPDATE_ARR_ELEMENTS';


export function getBurgerData(){
  return function (dispatch){
    dispatch({type: GET_DATA_REQUEST})
    getIngredients().then(res => {if (res && res.success) {
      dispatch({
        type: GET_DATA_SUCCESS,
        data: res.data})
  } else {dispatch({type: GET_DATA_FAILED})}
  })}
}

export function getOrder(arr){
  return function (dispatch){
    dispatch({type: GET_ORDER_REQUEST})
    postOrder(arr).then(res => {if (res && res.success) {
      dispatch({
        type: GET_ORDER_SUCCESS,
        order: res})
  } else {dispatch({type: GET_ORDER_FAILED})}
  })}
}