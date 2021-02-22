import { combineReducers } from "redux";
import { usersReducer } from "./index";

export default combineReducers({
  users: usersReducer
});
