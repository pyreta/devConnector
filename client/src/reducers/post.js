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
  },
  initialState
);
