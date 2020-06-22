import * as actionTypes from "../actionTypes";
import produce from "immer";

const initialState = {
  messages: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_MESSAGES:
      return produce(state, (draftState) => {
        draftState.messages = action.payload.messages;
      });
    case actionTypes.ADD_MESSAGE:
      return produce(state, (draftState) => {
        draftState.messages.push(action.payload.message);
      });
    default:
      return state;
  }
}
