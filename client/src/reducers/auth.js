import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default handleActions(
  {
    [actionTypes.REGISTER_SUCCESS]: (authState, { payload }) => {
      localStorage.setItem('token', payload.token);
      return {
        ...authState,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    },
    [actionTypes.REGISTER_FAIL]: (authState) => {
      localStorage.removeItem('token');
      return {
        ...authState,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
  },
  initialState
);
