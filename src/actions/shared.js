import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweet";
import { receiveUsers } from "./users";
import { setAuthUser } from "./authUser";

const AUTH_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthUser(AUTH_ID));
    });
  };
}
