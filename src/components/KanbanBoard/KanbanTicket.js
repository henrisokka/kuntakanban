import React, { useState } from "react";
import { Button, Modal, Header, Icon, Comment } from "semantic-ui-react";
import {
  toggleVote,
  assignTicket,
  moveToNextColumn
} from "../../store/kanbanReducer/actions";

import { connect } from "react-redux";

import AdminView from "./AdminView";

function KanbanTicket(props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        boxShadow: "0px 14px 20px #00000029",
        marginBottom: "20px",
        marginTop: "0px"
      }}
    >
      <div
        style={{
          background: "#FFFFFF 0% 0% no-repeat padding-box",

          paddingTop: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingBottom: "20px"
        }}
      >
        <div>
          <Button
            floated="right"
            circular
            icon="thumbs up"
            onClick={() => props.toggleVote(props.ticket.id, "testihenkilo1")}
          ></Button>
          <div>
            <h4 className="aanilaskuritiketissa">
              {props.ticket.voters.length}
            </h4>
          </div>
          <h4 className="tiketinotsikko">
            {props.ticket.title || "Ei otsikkoa"}
          </h4>
        </div>
      </div>
      <Button fluid color="orange" onClick={() => setOpen(true)}>
        Tarkastele aloitetta
      </Button>
      <Modal open={open} closeIcon onClose={() => setOpen(false)}>
        <Modal.Header>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {props.ticket.title}{" "}
            <span>
              <div className="vote-stuff-etc-etc">
                {props.ticket.voters.length}
                <Button
                  circular
                  icon="thumbs up"
                  onClick={() =>
                    props.toggleVote(props.ticket.id, "testihenkilo1")
                  }
                ></Button>
              </div>
            </span>
          </div>
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "20px"
            }}
          >
            <div>
              Prosessin omistaja: {props.ticket.owner || "Ei omistajaa"}
            </div>
            {props.isAdmin && props.userId !== props.ticket.owner ? (
              <div style={{ position: "absolute", right: 0 }}>
                <Button
                  onClick={() =>
                    props.assignTicket(props.ticket.id, props.userId)
                  }
                  color="orange"
                >
                  Ota vastuulle
                </Button>
              </div>
            ) : (
              <div style={{ position: "absolute", right: 0 }}>
                <Button
                  onClick={() => {
                    props.moveToNextColumn(props.ticket.id);
                    setOpen(false);
                  }}
                >
                  Siirrä seuraavaan vaiheeseen
                </Button>
              </div>
            )}
          </div>
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
    assignTicket: (ticketId, userId) =>
      dispatch(assignTicket(ticketId, userId)),
    moveToNextColumn: ticketId => dispatch(moveToNextColumn(ticketId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanTicket);
