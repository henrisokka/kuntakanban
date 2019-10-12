import React from "react";
import { Button, Modal, Header, Icon } from "semantic-ui-react";
import { toggleVote } from "../../store/kanbanReducer/actions";

import { connect } from "react-redux";

import WidgetArea from "./WidgetArea";

function KanbanTicket(props) {
  console.log("KanbanTicket: ", props);

  return (
    <div
      style={{
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 14px 20px #00000029",
        marginTop: "30px"
      }}
    >
      <div>
        {props.ticket.title || "Ei otsikkoa"}{" "}
        <div>{props.ticket.voters.length}</div>
      </div>

      <Button
        onClick={() => props.toggleVote(props.ticket.id, "testihenkilo1")}
      >
        Vote
      </Button>
      <div>{props.ticket.description || "Ei kuvausta"}</div>

      <Modal trigger={<Button>Tarkastele aloitetta</Button>}>
        <Modal.Header>
          {props.ticket.title}{" "}
          <span style={{ position: "relative", left: "40%" }}>
            {props.ticket.voters.length}
            <Button
              onClick={() => props.toggleVote(props.ticket.id, "testihenkilo1")}
            >
              <Icon disabled name="thumbs up"></Icon>
            </Button>
          </span>
        </Modal.Header>

        <Modal.Content>
          <Modal.Description>
            <Header>Kuvaus</Header>
            <p>{props.ticket.description}</p>
          </Modal.Description>
          <WidgetArea />
        </Modal.Content>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    toggleVote: (ticketId, userId) => dispatch(toggleVote(ticketId, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanTicket);
