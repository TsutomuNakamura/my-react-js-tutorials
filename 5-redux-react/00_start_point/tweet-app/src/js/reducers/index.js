import { combineReducers } from "redux";

import tweetsReducer from "./tweetsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  tweetsReducer,
  userReducer
})
