import createActionsAndTypes from './createActionsAndTypes';

  export const { actions, actionTypes } = createActionsAndTypes([
    'SET_ALERT',
    'REMOVE_ALERT',
    'REGISTER_SUCCESS',
    'REGISTER_FAIL',
    'USER_LOADED',
    'AUTH_ERROR',
    'LOGIN_SUCCESS',
    'LOGIN_FAIL',
    'LOGOUT',
    'GET_PROFILE',
    'PROFILE_ERROR',
    'CLEAR_PROFILE',
  ]);
  
  export default actions;
  