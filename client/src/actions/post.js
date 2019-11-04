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

// Add Post
export const addPost = formData => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.post(`/api/posts`, formData, config);
    dispatch(actions.ADD_POST(res.data));
    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    console.error('err', err);
    dispatch(actions.PROFILE_ERROR({ msg: err.response.statusText, status: err.response.status }));
  }
};

// Get post
export const getPost = id => async dispatch => {
  try {
    const res = await axios.get(`/api/posts/${id}`);
    dispatch(actions.GET_POST(res.data));
  } catch (err) {
    console.error('err', err);
    dispatch(actions.PROFILE_ERROR({ msg: err.response.statusText, status: err.response.status }));
  }
};

// Add Comment
export const addComment = (postId, formData) => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.post(`/api/posts/comment/${postId}`, formData, config);
    dispatch(actions.ADD_COMMENT(res.data));
    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    console.error('err', err);
    dispatch(actions.PROFILE_ERROR({ msg: err.response.statusText, status: err.response.status }));
  }
};

// Delete Comment
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
    dispatch(actions.REMOVE_COMMENT(commentId));
    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    console.error('err', err);
    dispatch(actions.PROFILE_ERROR({ msg: err.response.statusText, status: err.response.status }));
  }
};