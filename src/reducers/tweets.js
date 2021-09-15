import { RECEIVE_TWEETS } from "../actions/tweet";

export function tweets(state = {}, action) {
  const { type, tweets } = action;
  switch (type) {
    case RECEIVE_TWEETS:
      return { ...state, ...tweets };
    default:
      return state;
  }
}
