import * as actionTypes from "../actionTypes";

const initialState = {
  tickets: [
    {
      id: "0",
      title: "Kevyenliikenteen väylä Maja-kioskille",
      description:
        "Maja-kioskin viereinen koulupolku on jalkankulkijoille ja pyöräilijöille todellinen vaaranpaikka. Kyseiselle tielle tulisi rakentaa kävely-/pyörätie. Nykyisin jalankulkijat kulkevat käytännössä Majan parkkipaikan läpi ja pienimmät kulkijat ovat suuressa vaarassa jäädä auton alle. Koko Koulupolku toimii parkkialueena Pihvimajan asiakkaille ja autot ovat yleensä isoja, kuorma-autoja yms. ja näiden seassa jalankulkijoiden on kuljettava. Ehdotan tielle kevyenliikenteenväylän rakentamista. Samalla oja-alueen siistimistä viihtyisämmäksi ja roska-astioita tien varrelle. Nykyisin oja pientareineen toimii kaatopaikkana.",
      owner: null,
      subscribers: ["email@foo.boo", "2email@fo.fo"],
      column: 1,
      voters: [
        "sum1",
        "sum2",
        "sum3",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1"
      ],
      tags: ["infra", "turvallisuus"],
      comments: [
        {
          user: "Risto Kuosmanen",
          comment: "Hyvät perustelut. Otetaan asia käsittelyyn."
        }
      ]
    },
    {
      id: "1",
      title: "Lisää iltaneuvolaa.",
      description:
        "Olen YH-isä joka on päivätöissä enkä ehdi koskaan neuvolaan. Olisiko mahdollista saada iltapäivystystä neuvoloihin edes yhtenä päivänä viikossa.",
      owner: "Jaana Janatuinen",
      subscribers: ["email@foo.boo", "2email@fo.fo"],
      column: 3,
      voters: [
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1",
        "sum1"
      ],
      tags: ["sote"],
      comments: [
        {
          user: "Jaana Janatuinen",
          comment: "Kuulostaa järkevältä. Alamme valmistella asiaa."
        },
        {
          user: "Jaana Janatuinen",
          comment: "Iltapäivistysys lisätty torstaille kaikkiin neuvoloihin."
        }
      ]
    },
    {
      id: "2",
      title: "Suojatie lukiolle",
      description:
        "Haluaisin, että Mäntäslän lukion viereen rakennetaan uusi suojatie vanhan tilalle.",
      owner: null,
      subscribers: ["email@foo.boo", "2email@fo.fo"],
      column: 1,
      voters: ["sum1", "sum2", "sum1", "sum1", "sum1"],
      tags: ["infra", "turvallisuus"],
      comments: [
        {
          user: "Risto Kuosmanen",
          comment: "Oikein hyvä idea. Tekee kulkemisesta turvallisempaa."
        }
      ]
    },
    {
      id: "3",
      title: "Lisää talkoita",
      description: "Haluaisin että kunnassa olisi talkoita kuin ennen vanhaa.",
      owner: null,
      subscribers: ["email@foo.boo", "2email@fo.fo"],
      column: 0,
      voters: ["sum1", "sum2"],
      tags: [],
      comments: []
    }
  ],
  tags: ["sote", "infra", "turvallisuus"]
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
    if (!tags.includes(tag)) {
      tags.push(tag);
    }
  }

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

const comment = (state, action) => {
  const { ticketId, userId, text } = action.payload;
  const tickets = state.tickets.slice();
  const index = tickets.findIndex(t => t.id === ticketId);
  const ticket = Object.assign({}, tickets[index]);
  ticket.comments.push({ user: userId, comment: text });
  tickets[index] = ticket;

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

const moveToNextColumn = (state, action) => {
  const { ticketId } = action.payload;
  const tickets = state.tickets.slice();
  const index = tickets.findIndex(t => t.id === ticketId);

  const ticket = Object.assign({}, tickets[index]);
  ticket.column += 1;
  tickets[index] = ticket;

  return {
    ...state,
    tickets
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_VOTE:
      return toggleVote(state, action);
    case actionTypes.NEW_TICKET:
      return newTicket(state, action);
    case actionTypes.ASSIGN_TICKET:
      return assignTicket(state, action);
    case actionTypes.COMMENT:
      return comment(state, action);
    case actionTypes.MOVE_TO_NEXT_COLUMN:
      return moveToNextColumn(state, action);
    default:
      return state;
  }
};

export default reducer;
