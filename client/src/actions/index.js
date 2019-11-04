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
    'GET_PROFILES',
    'GET_REPOS',
    'PROFILE_ERROR',
    'CLEAR_PROFILE',
    'UPDATE_PROFILE',
    'ACCOUNT_DELETED',
    'GET_POSTS',
    'POST_ERROR',
    'UPDATE_LIKES',
  ]);
  
  export default actions;
  