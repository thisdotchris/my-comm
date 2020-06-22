import { combineReducers } from "redux";
import community from "./community";
import feed from "./feed";
import message from "./message";
import user from "./user.js";

export default combineReducers({ user, community, feed, message });
