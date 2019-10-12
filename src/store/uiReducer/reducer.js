import * as actionTypes from "../actionTypes";

const initialState = {
  activeView: "front",
  userRole: ""
};

const setView = (state, action) => {
  const { view } = action.payload;
  console.log(view);
  return { ...state, activeView: view };
};

const reducer = (state = initialState, action) => {
  console.log("reducer");
  switch (action.type) {
    case actionTypes.SET_VIEW:
      return setView(state, action);
    default:
      return state;
  }
};

export default reducer;
