import React from "react";
import { Button, Modal, Header, Icon, Comment } from "semantic-ui-react";
import { toggleVote, assignTicket } from "../../store/kanbanReducer/actions";

import { connect } from "react-redux";

import AdminView from "./AdminView";

function KanbanTicket(props) {
  console.log("KanbanTicket: ", props);

  return (
    <div
      style={{
        boxShadow: "0px 14px 20px #00000029"
      }}
    >
      <div
        style={{
          background: "#FFFFFF 0% 0% no-repeat padding-box",

          marginTop: "30px",
          paddingTop: "10px",
          paddingLeft: "10px",
          paddingRight: "10px"
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
      <Modal
        trigger={
          <Button fluid color="orange">
            Tarkastele aloitetta
          </Button>
        }
      >
        <Modal.Header>
          {props.ticket.title}{" "}
          <span style={{ position: "relative", left: "40%" }}>
            {props.isAdmin && props.userId !== props.ticket.owner ? (
              <Button
                onClick={() =>
                  props.assignTicket(props.ticket.id, props.userId)
                }
              >
                Ota vastuulle
              </Button>
            ) : (
              ""
            )}
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
          <Comment.Group>
            {props.ticket.comments.map(c => (
              <Comment className="comment">
                <Comment.Content>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Comment.Author>{c.user}</Comment.Author>
                    <Comment.Metadata>
                      <div>Yesterday at 12:30AM</div>
                    </Comment.Metadata>
                  </div>
                  <Comment.Text>
                    <div>{c.comment}</div>
                  </Comment.Text>
                </Comment.Content>
              </Comment>
            ))}
          </Comment.Group>

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
    toggleVote: (ticketId, userId) => dispatch(toggleVote(ticketId, userId)),
    assignTicket: (ticketId, userId) => dispatch(assignTicket(ticketId, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanTicket);
