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
  },
  initialState
);
