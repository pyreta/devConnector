import axios from 'axios';
import { setAlert } from './alert';
import actions from '.';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');
    dispatch(actions.GET_PROFILE(res.data));
  } catch (err) {
      console.log('err', err);
      
    dispatch(actions.PROFILE_ERROR({ msg: err.response.statusText, status: err.response.status }));
  }
};

// Create or update a profile
export const createProfile = (formData, history, edit) => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.post('/api/profile', formData, config);
    dispatch(actions.GET_PROFILE(res.data));
    dispatch(setAlert(edit ? 'Profile updated!' : 'Profile Created!', 'success'));
    if (!edit) history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      
    dispatch(actions.PROFILE_ERROR({ msg: err.response.statusText, status: err.response.status }));
  }
};

// add experience
export const addExperience = (formData, history) => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.put('/api/profile/experience', formData, config);
    dispatch(actions.UPDATE_PROFILE(res.data));
    dispatch(setAlert('Experience added', 'success'));
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      
    dispatch(actions.PROFILE_ERROR({ msg: err.response.statusText, status: err.response.status }));
  }
};

// add education
export const addEducation = (formData, history) => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.put('/api/profile/education', formData, config);
    dispatch(actions.UPDATE_PROFILE(res.data));
    dispatch(setAlert('Education added', 'success'));
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      
    dispatch(actions.PROFILE_ERROR({ msg: err.response.statusText, status: err.response.status }));
  }
};