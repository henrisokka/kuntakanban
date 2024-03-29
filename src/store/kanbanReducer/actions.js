import * as actionTypes from "../actionTypes";

export const newTicket = ticket => {
  return {
    type: actionTypes.NEW_TICKET,
    payload: {
      ticket
    }
  };
};

export const assignTicket = (ticketId, userId) => {
  return {
    type: actionTypes.ASSIGN_TICKET,
    payload: {
      ticketId,
      userId
    }
  };
};

export const toggleVote = (ticketId, userId) => {
  return {
    type: actionTypes.TOGGLE_VOTE,
    payload: { ticketId, userId }
  };
};

export const comment = (ticketId, userId, text) => {
  return {
    type: actionTypes.COMMENT,
    payload: { ticketId, userId, text }
  };
};

export const moveToNextColumn = ticketId => {
  return {
    type: actionTypes.MOVE_TO_NEXT_COLUMN,
    payload: { ticketId }
  };
};
