import axios from 'axios';
import { setAlert } from './alert';
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

// Add like
export const addLike = postId => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/like/${postId}`);
    dispatch(actions.UPDATE_LIKES({ id: postId, likes: res.data }));
  } catch (err) {
    console.error('err', err);
    dispatch(actions.PROFILE_ERROR({ msg: err.response.statusText, status: err.response.status }));
  }
};

// Remove like
export const removeLike = postId => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/unlike/${postId}`);
    dispatch(actions.UPDATE_LIKES({ id: postId, likes: res.data }));
  } catch (err) {
    console.error('err', err);
    dispatch(actions.PROFILE_ERROR({ msg: err.response.statusText, status: err.response.status }));
  }
};

// Delete Post
export const deletePost = postId => async dispatch => {
  try {
    await axios.delete(`/api/posts/${postId}`);
    dispatch(actions.DELETE_POST(postId));
    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    console.error('err', err);
    dispatch(actions.PROFILE_ERROR({ msg: err.response.statusText, status: err.response.status }));
  }
};
