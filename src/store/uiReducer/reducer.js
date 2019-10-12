import * as actionTypes from "../actionTypes";

const initialState = {
  activeView: "front",
  userRole: "admin",
  userId: "kunta_paattaja_89",
  selectedTags: ["sote"]
};

const setView = (state, action) => {
  const { view } = action.payload;
  console.log(view);
  return { ...state, activeView: view };
};

const switchTag = (state, action) => {
  const { tag } = action.payload;
  const selectedTags = state.selectedTags.slice();

  const index = selectedTags.findIndex(t => t === tag);
  if (index < 0) {
    selectedTags.push(tag);
  } else {
    selectedTags.splice(index, 1);
  }

  console.log("selectedTags.", selectedTags);

  return {
    ...state,
    selectedTags
  };
};

const reducer = (state = initialState, action) => {
  console.log("reducer");
  switch (action.type) {
    case actionTypes.SET_VIEW:
      return setView(state, action);
    case actionTypes.SWITCH_TAG:
      return switchTag(state, action);
    default:
      return state;
  }
};

export default reducer;
