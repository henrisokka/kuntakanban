import React, { useState } from "react";
import { Button, TextArea, Form, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import { assignTicket } from "../../store/kanbanReducer/actions";

function AdminView(props) {
  return (
    <div>
      <h5>Vastaa</h5>
      <Form>
        <TextArea />
        <Button icon="edit" primary>
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
    assignTicket: (ticketId, userId) => dispatch(assignTicket(ticketId, userId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminView);
