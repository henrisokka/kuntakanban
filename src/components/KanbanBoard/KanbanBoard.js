import React from "react";
import { connect } from "react-redux";
import { toggleVote } from "../../store/kanbanReducer/actions";

import Column from "./Column";

function KanbanBoard(props) {
  return (
    <div className="KanbanBoard">
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

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoard);
