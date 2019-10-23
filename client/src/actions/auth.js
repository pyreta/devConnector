import axios from 'axios';
import { setAlert } from './alert';
import actions from '.';

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = { headers: { 'Content-Type' :'application/json' } };
  try {
    const res = await axios.post('/api/users', { name, email, password }, config);
    dispatch(actions.REGISTER_SUCCESS(res.data));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    dispatch(actions.REGISTER_FAIL());
  }
};
