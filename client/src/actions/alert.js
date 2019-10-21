import actions from '.';
import uuid from 'uuid';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch(actions.SET_ALERT({ id, msg, alertType }));
  setTimeout(() => dispatch(actions.REMOVE_ALERT(id)), timeout);
};
