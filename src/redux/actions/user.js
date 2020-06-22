import * as actionTypes from "./../actionTypes";

export const setCurrentUser = (currentUser) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_CURRENT_USER,
    payload: {
      currentUser,
    },
  });
};

export const currentUserAddComm = (newComm) => (dispatch) => {
  dispatch({
    type: actionTypes.CURRENT_USER_ADD_COMM,
    payload: {
      newComm,
    },
  });
};

export const currentUserRemoveComm = (_id) => (dispatch) => {
  dispatch({
    type: actionTypes.CURRENT_USER_REMOVE_COMM,
    payload: {
      _id,
    },
  });
};
