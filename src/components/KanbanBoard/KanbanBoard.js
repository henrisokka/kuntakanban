import React from "react";
import { connect } from "react-redux";

import Column from "./Column";

function KanbanBoard(props) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Column
        title="Aloitteet"
        tickets={props.tickets.filter(t => t.column === 0)}
      />
      <Column
        title="Valmistelussa"
        tickets={props.tickets.filter(t => t.column === 1)}
      />
      <Column
        title="Käsittelyssä"
        tickets={props.tickets.filter(t => t.column === 2)}
      />
      <Column
        title="Päätös tehty"
        tickets={props.tickets.filter(t => t.column === 3)}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tickets: state.kanbanReducer.tickets
  };
};

const mapDispatchToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoard);
