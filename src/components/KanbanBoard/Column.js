import React from "react";

import KanbanTicket from "./KanbanTicket";

export default function Column(props) {
  console.log("Column: ", props);
  return (
    <div style={{ width: "20vw", marginRight: "10px" }}>
      <h4 className="kanbanotsikot">{props.title}</h4>
      <div className="KanbanColumn">{renderTickets(props.tickets)}</div>
    </div>
  );
}

function renderTickets(tickets) {
  console.log("renderTickets: ", tickets);
  return tickets.map(t => <KanbanTicket ticket={t} />);
}
