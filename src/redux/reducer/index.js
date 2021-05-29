import { combineReducers } from "redux";

//reducers

import userCredentials from "./userCrendentials";
import userInfoData from "./userInfoData";

export const reducers = combineReducers({
  userCredentials,
  userInfoData,
});
