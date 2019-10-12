import React from "react";
import { Button, Modal, Header, Icon } from "semantic-ui-react";
import { toggleVote } from "../../store/kanbanReducer/actions";

import { connect } from "react-redux";

import AdminView from "./AdminView";

function KanbanTicket(props) {
  console.log("KanbanTicket: ", props);

  return (

    <div
    style={{
    boxShadow: "0px 14px 20px #00000029",
  }}>
    <div
      style={{
        background: "#FFFFFF 0% 0% no-repeat padding-box",

        marginTop: "30px",
        paddingTop: "10px",
        paddingLeft: "10px",
        paddingRight:"10px",

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
</div>
      <Modal trigger={<Button fluid color='orange'>Tarkastele aloitetta</Button>}>
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
            <div>Tagit: {props.ticket.tags ? props.ticket.tags[0] : ""}</div>
            <p>{props.ticket.description}</p>
          </Modal.Description>
          {props.isAdmin ? <AdminView ticket={props.ticket} /> : null}
          <div>Prosessin omistaja: {props.ticket.owner || "Ei omistajaa"}</div>
        </Modal.Content>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAdmin: state.uiReducer.userRole === "admin",
    userId: state.uiReducer.userId
  };
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
