import * as actionTypes from "../actionTypes";

export const newTicket = ticket => {
  return {
    type: actionTypes.NEW_TICKET,
    payload: {
      ticket
    }
  };
};

export const toggleVote = (ticketId, userId) => {
  return {
    type: actionTypes.TOGGLE_VOTE,
    payload: { ticketId, userId }
  };
};
