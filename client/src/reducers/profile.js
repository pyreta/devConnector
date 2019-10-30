import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default handleActions(
  {
    [actionTypes.GET_PROFILE]: (profileState, { payload }) => ({
      ...profileState,
      profile: payload.profile,
      loading: false,
    }),
    [actionTypes.PROFILE_ERROR]: (profileState, { payload }) => ({
      ...profileState,
      error: payload,
      loading: false,
    }),
    [actionTypes.CLEAR_PROFILE]: () => initialState,
  },
  initialState
);
