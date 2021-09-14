import { RECEIVE_TWEETS } from "../actions/tweet";

export function tweetsReducer(state = {}, action) {
  const { type, tweets } = action;
  switch (type) {
    case RECEIVE_TWEETS:
      return { ...state, tweets };
    default:
      return state;
  }
}
