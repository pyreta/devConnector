import createActionsAndTypes from '../helpers/createActionsAndTypes';

  export const { actions, actionTypes } = createActionsAndTypes([
    'SET_ALERT',
    'REMOVE_ALERT',
  ]);
  
  export default actions;
  