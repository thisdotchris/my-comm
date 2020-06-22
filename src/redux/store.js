import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const initialState = {};

const middlewares = [thunk];

export default createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middlewares))
);
