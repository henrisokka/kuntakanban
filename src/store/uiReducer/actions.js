import * as actionTypes from "../actionTypes";

export const setView = view => {
  console.log("setView", view);
  return {
    type: actionTypes.SET_VIEW,
    payload: { view }
  };
};

export const switchTag = tag => {
  return {
    type: actionTypes.SWITCH_TAG,
    payload: { tag }
  };
};
