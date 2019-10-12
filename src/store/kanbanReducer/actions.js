import * as actionTypes from "../actionTypes";

export const toggleVote = (ticketId, userId) => {
  return {
    type: actionTypes.TOGGLE_VOTE,
    payload: { ticketId, userId }
  };
};
