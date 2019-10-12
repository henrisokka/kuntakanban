const initialState = {
  tickets: [
    {
      id: "0",
      title: "Hyvä avaus",
      description: "Voitaisko tehdä näin joskus pliis",
      owner: "sumUserId8",
      subscribers: ["email@foo.boo", "2email@fo.fo"],
      column: 0,
      voters: ["sum1"],
      widgets: [{}]
    },
    {
      id: "1",
      title: "Huono avaus",
      description: "Mutta se on nyt vastaanotettu eikö",
      owner: "sumUserId8",
      subscribers: ["email@foo.boo", "2email@fo.fo"],
      column: 1,
      voters: ["sum1"],
      widgets: [{}]
    },
    {
      id: "2",
      title: "Suojatie lukiolle",
      description: "Ois hyvä juttu mun mielestä kiitos",
      owner: "sumUserId8",
      subscribers: ["email@foo.boo", "2email@fo.fo"],
      column: 1,
      voters: ["sum1", "sum2"],
      widgets: [{}]
    }
  ]
};

const editCard = (state, action) => {
  const { id, attribute, value } = action.payload;
  const tickets = state.tickets.slice();
  const ticket = tickets.find(t => t.id === id);
  ticket[attribute] = value;
  return { ...state, tickets };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "foo":
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
