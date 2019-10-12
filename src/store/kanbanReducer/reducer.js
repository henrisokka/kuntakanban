const initialState = {
  tickets: [
    {
      id: "0",
      title: "Example ticket",
      description: "This is a description",
      owner: "sumUserId8",
      subscribers: ["email@foo.boo", "2email@fo.fo"],
      widgets: [{}]
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "foo":
      return { ...state };
    default:
      return state;
  }
};
