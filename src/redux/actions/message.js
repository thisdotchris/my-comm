import * as actionTypes from "./../actionTypes";

export const setMessage = (messages) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_MESSAGES,
    payload: {
      messages,
    },
  });
};

export const addMessage = (message) => (dispath) => {
  dispath({
    type: actionTypes.ADD_MESSAGE,
    payload: {
      message,
    },
  });
};
