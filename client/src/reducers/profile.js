import { handleActions } from 'redux-actions';
import { actionTypes } from '../actions';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

const setProfile = (profileState, { payload }) => ({
  ...profileState,
  profile: payload.profile,
  loading: false,
});

export default handleActions(
  {
    [actionTypes.GET_PROFILE]: setProfile,
    [actionTypes.GET_PROFILES]: (profileState, { payload }) => ({
      ...profileState,
      profiles: payload,
      loading: false,
    }),
    [actionTypes.GET_REPOS]: (profileState, { payload }) => ({
      ...profileState,
      repos: payload,
      loading: false,
    }),
    [actionTypes.UPDATE_PROFILE]: setProfile,
    [actionTypes.PROFILE_ERROR]: (profileState, { payload }) => ({
      ...profileState,
      error: payload,
      loading: false,
    }),
    [actionTypes.CLEAR_PROFILE]: () => initialState,
  },
  initialState
);
