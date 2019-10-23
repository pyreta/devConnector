import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const handleFail = authState => {
  localStorage.removeItem('token');
  return {
    ...authState,
    token: null,
    isAuthenticated: false,
    loading: false,
  };
};

const handleSuccess = (authState, { payload }) => {
  localStorage.setItem('token', payload.token);
  return {
    ...authState,
    ...payload,
    isAuthenticated: true,
    loading: false,
  };
};

export default handleActions(
  {
    [actionTypes.REGISTER_SUCCESS]: handleSuccess,
    [actionTypes.LOGIN_SUCCESS]: handleSuccess,
    [actionTypes.REGISTER_FAIL]: handleFail,
    [actionTypes.LOGIN_FAIL]: handleFail,
    [actionTypes.USER_LOADED]: (authState, { payload: user }) => {
      return {
        ...authState,
        isAuthenticated: true,
        loading: false,
        user,
      };
    },
    [actionTypes.AUTH_ERROR]: handleFail,
  },
  initialState
);
