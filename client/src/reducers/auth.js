import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const clearToken = authState => {
  localStorage.removeItem('token');
  return {
    ...authState,
    token: null,
    isAuthenticated: false,
    loading: false,
  };
};

const setToken = (authState, { payload }) => {
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
    [actionTypes.REGISTER_SUCCESS]: setToken,
    [actionTypes.LOGIN_SUCCESS]: setToken,
    [actionTypes.REGISTER_FAIL]: clearToken,
    [actionTypes.LOGIN_FAIL]: clearToken,
    [actionTypes.LOGOUT]: clearToken,
    [actionTypes.ACCOUNT_DELETED]: clearToken,
    [actionTypes.USER_LOADED]: (authState, { payload: user }) => {
      return {
        ...authState,
        isAuthenticated: true,
        loading: false,
        user,
      };
    },
    [actionTypes.AUTH_ERROR]: clearToken,
  },
  initialState
);
