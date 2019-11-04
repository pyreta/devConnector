import axios from 'axios';
// import { setAlert } from './alert';
import actions from '.';

// Get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');
    dispatch(actions.GET_POSTS(res.data));
  } catch (err) {
    console.error('err', err);

    dispatch(actions.PROFILE_ERROR({ msg: err.response.statusText, status: err.response.status }));
  }
};
