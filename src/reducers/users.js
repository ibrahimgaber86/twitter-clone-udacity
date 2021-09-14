import { RECEIVE_USERS } from "../actions/users";

export function userReducer(state = {}, action) {
  const { type, users } = action;
  switch (type) {
    case RECEIVE_USERS:
      return { ...state, users };
    default:
      return state;
  }
}
