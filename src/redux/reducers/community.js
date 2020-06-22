import * as actionTypes from "../actionTypes";
import produce from "immer";

const initialState = {
  availableCommunities: [],
  myCommunities: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_MY_COMMUNITY:
      return produce(state, (draftState) => {
        draftState.myCommunities = action.payload.myCommunities;
      });
    case actionTypes.ADD_TO_MY_COMMUNITY:
      return produce(state, (draftState) => {
        draftState.myCommunities.push(action.payload.community);
      });
    case actionTypes.REMOVE_TO_MY_COMMUNITY:
      return produce(state, (draftState) => {
        draftState.myCommunities = draftState.myCommunities.filter(
          (comm) => comm._id !== action.payload._id
        );
      });
    case actionTypes.SET_AVAILABLE_COMMUNITY:
      return produce(state, (draftState) => {
        draftState.availableCommunities = action.payload.availableCommunities;
      });
    case actionTypes.ADD_COMMUNITY:
      return produce(state, (draftState) => {
        draftState.availableCommunities.push(action.payload.community);
      });
    case actionTypes.REMOVE_COMMUNITY:
      return produce(state, (draftState) => {
        draftState.availableCommunities = draftState.availableCommunities.filter(
          (comm) => comm._id !== action.payload._id
        );
      });
    case actionTypes.DELETE_COMMUNITY:
      return produce(state, (draftState) => {
        draftState.myCommunities = draftState.myCommunities.filter((i) => {
          if (i._id !== action.payload._id) return i;
        });
      });
    case actionTypes.UPDATE_COMMUNITY:
      return produce(state, (draftState) => {
        draftState.myCommunities = draftState.myCommunities.map((i) => {
          if (i._id === action.payload.community._id) {
            i.name = action.payload.community.name;
            i.description = action.payload.community.description;
          }
          return i;
        });
      });
    default:
      return state;
  }
}
