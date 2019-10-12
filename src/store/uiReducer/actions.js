import * as actionTypes from "../actionTypes";

export const setView = view => {
  console.log("setView", view);
  return {
    type: actionTypes.SET_VIEW,
    payload: { view }
  };
};
