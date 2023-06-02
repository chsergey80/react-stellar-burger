import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
} from '../actions/api';

const initialStateData = {
  data: [],
  dataRequest: false,
  dataFailed: false};

export const getDataReducer = (state = initialStateData, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST: {
      return {...state, 
            dataRequest: true }}
    case GET_DATA_SUCCESS: {
      return {...state, 
            dataRequest: false,
            dataFailed: false,
            data: action.data}}
    case GET_DATA_FAILED: {
      return {...state, 
            dataRequest: false,
            dataFailed: true}}
    default: {return state}}
};

const initialStateOrder = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false};

export const getOrderReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {...state, 
            orderRequest: true,
            orderFailed: false}}
    case GET_ORDER_SUCCESS: {
      return {...state, 
            orderNumber: action.order,
            orderRequest: false,
            orderFailed: false}}
    case GET_ORDER_FAILED: {
      return {...state, 
            orderNumber: null,
            orderRequest: false,
            orderFailed: true}}
    default: {return state}}
};