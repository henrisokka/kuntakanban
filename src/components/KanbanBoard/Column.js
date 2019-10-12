import React from "react";

import KanbanTicket from "./KanbanTicket";

export default function Column(props) {
  console.log("Column: ", props);
  return (
    <div>
        <h4>{props.title}</h4>
    <div className="KanbanColumn">
      {renderTickets(props.tickets)}
    </div>
    </div>

  );
}

function renderTickets(tickets) {
  console.log("renderTickets: ", tickets);
  return tickets.map(t => <KanbanTicket ticket={t} />);
}
