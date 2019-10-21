import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';

const initialState = [
  // {id: 1, msg: 'Please Log in', alertType: 'success'}
];

export default handleActions(
  {
    [actionTypes.SET_ALERT]: (alerts, { payload: newAlert }) => [...alerts, newAlert],
    [actionTypes.REMOVE_ALERT]: (alerts, { payload: alertId }) =>
      alerts.filter(alert => alert.id !== alertId),
  },
  initialState
);
