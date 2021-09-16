import { RECEIVE_TWEETS, TOGGLE_TWEETS } from "../actions/tweet";
import { authUser } from "./authUser";

export function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return { ...state, ...action.tweets };
    case TOGGLE_TWEETS:
      console.log(">>>>", action);
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked
            ? state[action.id].likes.filter((uid) => {
                console.log("===>", uid !== action.authUser);
                return uid !== action.authUser;
              })
            : state[action.id].likes.concat([action.authUser]),
        },
      };
    default:
      return state;
  }
}
