import React from "react";

import KanbanTicket from "./KanbanTicket";

export default function Column(props) {
  console.log("Column: ", props);
  return (
    <div className="KanbanColumn">
      <h4>{props.title}</h4>
      {renderTickets(props.tickets)}
    </div>
  );
}

function renderTickets(tickets) {
  console.log("renderTickets: ", tickets);
  return tickets.map(t => <KanbanTicket ticket={t} />);
}
