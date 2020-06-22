import * as actionTypes from "../actionTypes";
import produce from "immer";

const initialState = {
  currentUser: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return produce(state, (draftState) => {
        draftState.currentUser = action.payload.currentUser;
      });
    case actionTypes.CURRENT_USER_ADD_COMM:
      return produce(state, (draftState) => {
        draftState.currentUser.communities.push(action.payload.newComm);
      });
    case actionTypes.CURRENT_USER_REMOVE_COMM:
      return produce(state, (draftState) => {
        draftState.currentUser.communities = draftState.currentUser.communities.filter(
          (comm) => comm._id !== action.payload._id
        );
      });
    default:
      return state;
  }
}
