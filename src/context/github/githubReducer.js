import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  CLEAR_USERS,
  SET_LOADING,
} from "../types"

const handlers = {
  [SEARCH_USERS]: (state, { payload }) => ({
    ...state,
    users: payload,
    loading: false,
  }),
  [GET_REPOS]: (state, { payload }) => ({
    ...state,
    repos: payload,
    loading: false,
  }),
  [GET_USER]: (state, { payload }) => ({
    ...state,
    user: payload,
    loading: false,
  }),
  [CLEAR_USERS]: (state) => ({ ...state, users: [] }),
  [SET_LOADING]: (state) => ({ ...state, loading: true }),
  DEFAULT: (state) => state,
}

export const GithubReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.default
  return handler(state, action)
}
