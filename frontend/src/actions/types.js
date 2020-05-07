
// auth actions
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';

// alert actions
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

// product actions
export const LOAD_CATEGORY = 'LOAD_CATEGORY';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const PRODUCT_DETAIL = 'PRODUCT_DETAIL';

// order actions
export const GET_USER_ORDER = 'GET_USER_ORDER';
export const GET_USER_ORDER_ERR = 'GET_USER_ORDER_ERR';
export const UPDATE_ORDER_STATUS = 'UPDATE_ORDER_STATUS';
export const UPDATE_ORDER_STAT_ERR = 'UPDATE_ORDER_STAT_ERR';

//cart and save for later actions

export const CUSTOMER_CART = 'CUSTOMER_CART';
export const CUSTOMER_SAVEFORLATER = 'CUSTOMER_SAVEFORLATER';
export const CUSTOMER_SAVEFORLATER_DELETE = 'CUSTOMER_SAVEFORLATER_DELETE';
export const ADD_TO_CART_PRODUCT_DETAIL_PAGE = 'ADD_TO_CART_PRODUCT_DETAIL_PAGE';
export const FETCH_CARD = 'FETCH_CARD';
export const FETCH_ADDRESS = 'FETCH_ADDRESS';
export const ADD_CARD = 'ADD_CARD'
export const ADD_ADDRESS = 'ADD_ADDRESS'
export const ADDRESS_DETAIL='ADDRESS_DETAIL'
export const ADD_REVIEW='ADD_REVIEW'
// ...add a new action type

// seller 
export const FETCH_SELLER_PROFILE = 'FETCH_SELLER_PROFILE'
export const UPDATE_SELLER_PROFILE = 'UPDATE_SELLER_PROFILE'