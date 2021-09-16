import { saveLikeToggle } from "../utils/api";
import { authUser } from "./../reducers/authUser";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEETS = "TOGGLE_TWEETS";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

function toggleTweet({ id, authUser, hasLiked }) {
  return {
    type: TOGGLE_TWEETS,
    id,
    authUser,
    hasLiked,
  };
}
export function handleToggleTweet(info) {
  return (dispatch) => {
    dispatch(toggleTweet(info));
    return saveLikeToggle(info).catch((err) => {
      console.warn("error in like tweet", err.message);
      dispatch(toggleTweet(info));
      alert("there was error in liking tweet");
    });
  };
}
