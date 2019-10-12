import React from "react";
import { connect } from "react-redux";
import { toggleVote } from "../../store/kanbanReducer/actions";

import Column from "./Column";

function KanbanBoard(props) {
  const includedTags = props.selectedTags.length > 0 ? props.selectedTags : [];

  return (
    <div className="KanbanBoard">
      <Column
        title="Aloitteet"
        tickets={props.tickets
          .filter(t => t.column === 0 && matchesFilter(t.tags, includedTags))
          .reverse()}
      />
      <Column
        title="Valmistelussa"
        tickets={props.tickets.filter(
          t => t.column === 1 && matchesFilter(t.tags, includedTags)
        )}
      />
      <Column
        title="Käsittelyssä"
        tickets={props.tickets.filter(
          t => t.column === 2 && matchesFilter(t.tags, includedTags)
        )}
      />
      <Column
        title="Päätös tehty"
        tickets={props.tickets.filter(
          t => t.column === 3 && matchesFilter(t.tags, includedTags)
        )}
      />
    </div>
  );
}

const matchesFilter = (ticketTags, selectedTags) => {
  if (selectedTags.length === 0) {
    return true;
  }
  for (let tTag of ticketTags) {
    if (selectedTags.includes(tTag)) {
      return true;
    }
  }

  return false;
};

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
