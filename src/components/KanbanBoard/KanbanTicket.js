import React from "react";
import { Button, Modal, Header } from "semantic-ui-react";

import WidgetArea from "./WidgetArea";

export default function KanbanTicket(props) {
  return (
    <div
      style={{
        border: "solid",
        borderWidth: "1px",
        borderColor: "yellow",
        marginBottom: "10px"
      }}
    >
      <div>{props.ticket.title || "Ei otsikkoa"}</div>
      <div>{props.ticket.description || "Ei kuvausta"}</div>
      <Modal trigger={<Button>Tarkastele aloitetta</Button>}>
        <Modal.Header>{props.ticket.title}</Modal.Header>

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
