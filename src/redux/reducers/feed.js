import * as actionTypes from "../actionTypes";
import produce from "immer";

const initialState = {
  feeds: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_FEED:
      return produce(state, (draftState) => {
        draftState.feeds = action.payload.feeds;
        draftState.feeds.reverse();
      });
    case actionTypes.ADD_FEED:
      return produce(state, (draftState) => {
        draftState.feeds.push(action.payload.feed);
        draftState.feeds.reverse();
      });
    case actionTypes.UPDATE_FEED:
      return produce(state, (draftState) => {
        draftState.feeds
          .map((feed) => {
            if (feed._id === action.payload.feed._id)
              feed = action.payload.feed;
            return feed;
          })
          .reverse();
      });
    case actionTypes.REMOVE_FEED:
      return produce(state, (draftState) => {
        draftState.feeds = draftState.feeds
          .filter((feed) => feed._id !== action.payload.feed._id)
          .reverse();
      });
    default:
      return state;
  }
}
