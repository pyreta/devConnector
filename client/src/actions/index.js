import createActionsAndTypes from './createActionsAndTypes';

  export const { actions, actionTypes } = createActionsAndTypes([
    'SET_ALERT',
    'REMOVE_ALERT',
    'REGISTER_SUCCESS',
    'REGISTER_FAIL',
  ]);
  
  export default actions;
  