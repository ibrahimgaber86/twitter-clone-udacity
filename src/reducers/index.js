import { combineReducers } from "redux";

import { tweetsReducer } from "./tweets";
import { userReducer } from "./users";
import { authUserReducer } from "./authUser";

export default combineReducers({
  tweets: tweetsReducer,
  users: userReducer,
  authId: authUserReducer,
});
