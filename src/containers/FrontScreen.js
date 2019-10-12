import React from "react";

import { connect } from "react-redux";

export default function FrontScreen(props) {
  return (
    <div>
      <div onClick={() => props.setView("newTicket")}>Tee uusi aloite</div>
      <div onClick={() => props.setView("kanban")}>Seuraa aloitteita</div>
    </div>
  );
}
