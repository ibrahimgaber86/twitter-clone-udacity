import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";

import { tweets } from "./tweets";
import { users } from "./users";
import { authUser } from "./authUser";

export default combineReducers({
  tweets,
  users,
  authUser,
  loadingBar: loadingBarReducer,
});
