import React, { useState } from "react";
import { Button, TextArea, Form, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import { assignTicket, comment } from "../../store/kanbanReducer/actions";

function AdminView(props) {
  const [text, setText] = useState("");
  return (
    <div>
      <h5>Vastaa</h5>
      <Form>
        <TextArea value={text} onChange={e => setText(e.target.value)} />
        <Button
          onClick={() => {
            setText("");
            props.comment(props.ticket.id, props.userId, text);
          }}
          icon="edit"
          primary
        >
          Kommentoi
        </Button>
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
    assignTicket: (ticketId, userId) =>
      dispatch(assignTicket(ticketId, userId)),
    comment: (ticketId, userId, text) =>
      dispatch(comment(ticketId, userId, text))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminView);
