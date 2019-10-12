import React from "react";

import KanbanTicket from "./KanbanTicket";

export default function Column(props) {
  return (
    <div style={{ width: "25%", border: "solid" }}>
      <h2>{props.title}</h2>
      {renderTickets(props.tickets)}
    </div>
  );
}

function renderTickets(tickets) {
  return tickets.map(t => <KanbanTicket ticket={t} />);
}
