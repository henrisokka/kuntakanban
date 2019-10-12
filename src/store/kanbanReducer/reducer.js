import * as actionTypes from "../actionTypes";

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

const toggleVote = (state, action) => {
  console.log("toggleVote");
  const { ticketId, userId } = action.payload;
  const tickets = state.tickets.slice();
  const ticketIndex = tickets.findIndex(t => t.id === ticketId);
  const ticket = Object.assign({}, tickets[ticketIndex]);
  const voters = ticket.voters;
  const voterIndex = voters.findIndex(v => v === userId);
  if (voterIndex < 0) {
    voters.push(userId);
  } else {
    voters.splice(voterIndex, 1);
  }

  tickets[ticketIndex] = ticket;

  console.log("voters :", voters);

  return {
    ...state,
    tickets
  };
};

const newTicket = (state, action) => {
  const { ticket } = action.payload;
  ticket.voters.push(ticket.owner);
  ticket.id = state.tickets.length + 1 + "id";

  const tickets = state.tickets.slice();
  tickets.push(ticket);
  return { ...state, tickets };
};

const edit = (state, action) => {
  const { id, attribute, value } = action.payload;
  const tickets = state.tickets.slice();
  const ticket = tickets.find(t => t.id === id);
  ticket[attribute] = value;
  return { ...state, tickets };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_VOTE:
      return toggleVote(state, action);
    case actionTypes.NEW_TICKET:
      return newTicket(state, action);
    default:
      return state;
  }
};

export default reducer;
