import * as actionTypes from "./../actionTypes";

export const setFeed = (feeds) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_FEED,
    payload: {
      feeds,
    },
  });
};

export const addFeed = (feed) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_FEED,
    payload: { feed },
  });
};

export const updateFeed = (feed) => (dispatch) => {
  dispatch({
    type: actionTypes.UPDATE_FEED,
    payload: { feed },
  });
};

export const removeFeed = (_id) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_FEED,
    payload: { _id },
  });
};
