import * as actionTypes from "../actionTypes";

const initialState = {
  tickets: [
    {
      id: "0",
      title: "Hyvä avaus",
      description: "Voitaisko tehdä näin joskus pliis",
      owner: null,
      subscribers: ["email@foo.boo", "2email@fo.fo"],
      column: 0,
      voters: ["sum1"],
      tags: [],
      widgets: [
        {
          type: "comment",
          content: "Hyvä ajatus, voisi toteuttaa mutta ei kuulu omaan alaani."
        }
      ]
    },
    {
      id: "1",
      title: "Huono avaus",
      description: "Mutta se on nyt vastaanotettu eikö",
      owner: "sumUserId8",
      subscribers: ["email@foo.boo", "2email@fo.fo"],
      column: 1,
      voters: ["sum1"],
      tags: ["sote"],
      widgets: [{}]
    },
    {
      id: "2",
      title: "Suojatie lukiolle",
      description: "Ois hyvä juttu mun mielestä kiitos",
      owner: null,
      subscribers: ["email@foo.boo", "2email@fo.fo"],
      column: 0,
      voters: ["sum1", "sum2"],
      tags: [],
      widgets: [{}]
    }
  ],
  tags: ["sote", "kadut", "digitalisaatio"]
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

  const tags = state.tags.slice();

  for (let tag of ticket.tags) {
    console.log("tag: ", tag);
    if (!tags.includes(tag)) {
      tags.push(tag);
    }
  }

  console.log("tags: ", tags);

  return { ...state, tickets, tags };
};

const assignTicket = (state, action) => {
  const { ticketId, userId } = action.payload;
  const tickets = state.tickets.slice();
  const ticketIndex = tickets.findIndex(t => t.id === ticketId);

  if (ticketIndex > -1) {
    const ticket = Object.assign({}, tickets[ticketIndex]);
    ticket.owner = userId;
    tickets[ticketIndex] = ticket;
  }
  return {
    ...state,
    tickets
  };
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
    case actionTypes.ASSIGN_TICKET:
      return assignTicket(state, action);
    default:
      return state;
  }
};

export default reducer;
