import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';

const initialState = {
  posts: [],
  post: null,
  loading: null,
  error: {},
};

export default handleActions(
  {
    [actionTypes.GET_POSTS]: (postsState, { payload }) => {
      return {
        ...postsState,
        posts: payload,
        loading: false,
      };
    },
    [actionTypes.GET_POST]: (postsState, { payload }) => {
      return {
        ...postsState,
        post: payload,
        loading: false,
      };
    },
    [actionTypes.ADD_POST]: (postsState, { payload }) => {
      return {
        ...postsState,
        posts: [payload, ...postsState.posts],
        loading: false,
      };
    },
    [actionTypes.DELETE_POST]: (postsState, { payload }) => {
      return {
        ...postsState,
        posts: postsState.posts.filter(post => post._id !== payload),
        loading: false,
      };
    },
    [actionTypes.POST_ERROR]: (postsState, { payload }) => {
      return {
        ...postsState,
        error: payload,
        loading: false,
      };
    },
    [actionTypes.UPDATE_LIKES]: (postsState, { payload }) => {
      return {
        ...postsState,
        posts: postsState.posts.map(post =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      };
    },
    [actionTypes.ADD_COMMENT]: (postsState, { payload }) => {
      return {
        ...postsState,
        post: { ...postsState.post, comments: payload },
        loading: false,
      };
    },
    [actionTypes.REMOVE_COMMENT]: (postsState, { payload }) => {
      return {
        ...postsState,
        post: { ...postsState.post, comments: postsState.post.comments.filter(comment => comment._id !== payload) },
        loading: false,
      };
    },
  },
  initialState
);
