import axios from 'axios';
// import { setAlert } from './alert';
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
