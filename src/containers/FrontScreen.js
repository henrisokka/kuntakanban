import React from "react";

import { connect } from "react-redux";

export default function FrontScreen(props) {
  return (
    <div>
      <div onClick={() => props.setView("new")}>Tee uusi aloite</div>
      <div>Seuraa aloitteita</div>
    </div>
  );
}
