import axios from 'axios';
import { setAlert } from './alert';
import actions from '.';
import setAuthToken from '../utils/setAuthToken';

export const setTokenFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  if (token) setAuthToken(token);
};
// Load User
export const loadUser = () => async dispatch => {
  setTokenFromLocalStorage();
  try {
    const res = await axios.get('/api/auth');
    dispatch(actions.USER_LOADED(res.data));
  } catch (err) {
    dispatch(actions.AUTH_ERROR(err));
  }
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    const res = await axios.post('/api/users', { name, email, password }, config);
    dispatch(actions.REGISTER_SUCCESS(res.data));
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    dispatch(actions.REGISTER_FAIL(errors));
  }
};

// Log in User
export const login = (email, password) => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    const res = await axios.post('/api/auth', { email, password }, config);
    dispatch(actions.LOGIN_SUCCESS(res.data));
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    dispatch(actions.LOGIN_FAIL(errors));
  }
};

// Log out User
export const logout = () => dispatch => {
  dispatch(actions.LOGOUT());
};
