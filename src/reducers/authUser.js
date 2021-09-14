import { SET_AUTH_USER } from "../actions/authUser";

export function authUser(state = null, action) {
  const { type, id } = action;
  switch (type) {
    case SET_AUTH_USER:
      return id;
    default:
      return state;
  }
}
