import React, { useState } from "react";
import { Button, TextArea, Form } from "semantic-ui-react";
import { connect } from "react-redux";

import { assignTicket } from "../../store/kanbanReducer/actions";

function AdminView(props) {
  return (
    <div>
      {props.ticket.owner !== props.userId ? (
        <Button
          onClick={() => props.assignTicket(props.ticket.id, props.userId)}
        >
          Ota vastuullesi
        </Button>
      ) : (
        <div>Sinun vastuulla tämä nyt. Älä mokaa!</div>
      )}
      <h4>Vastaa</h4>
      <Form>
        <TextArea />
        <Button>Kommentoi</Button>
      </Form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userRole: state.uiReducer.userRole,
    userId: state.uiReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    assignTicket: (ticketId, userId) => dispatch(assignTicket(ticketId, userId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminView);
