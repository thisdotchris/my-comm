import * as actionTypes from "./../actionTypes";

export const setMyCommunity = (myCommunities) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_MY_COMMUNITY,
    payload: {
      myCommunities,
    },
  });
};

export const addToMyCommunity = (community) => (dispath) => {
  dispath({
    type: actionTypes.ADD_TO_MY_COMMUNITY,
    payload: {
      community,
    },
  });
};

export const removeToMyCommunity = (_id) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_TO_MY_COMMUNITY,
    payload: {
      _id,
    },
  });
};

export const setAvailableCommunity = (availableCommunities) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_AVAILABLE_COMMUNITY,
    payload: {
      availableCommunities,
    },
  });
};

export const addCommunity = (community) => (dispath) => {
  dispath({
    type: actionTypes.ADD_COMMUNITY,
    payload: {
      community,
    },
  });
};

export const removeCommunity = (_id) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_COMMUNITY,
    payload: {
      _id,
    },
  });
};

export const updateCommunity = (community) => (dispath) => {
  dispath({
    type: actionTypes.UPDATE_COMMUNITY,
    payload: {
      community,
    },
  });
};

export const deleteCommunity = (_id) => (dispath) => {
  dispath({
    type: actionTypes.DELETE_COMMUNITY,
    payload: {
      _id,
    },
  });
};
