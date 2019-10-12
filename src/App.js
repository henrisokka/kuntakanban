import React from "react";
import { setView } from "./store/uiReducer/actions";
import { connect } from "react-redux";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import TicketCreator from "./containers/TicketCreator";

import "./App.css";

function App(props) {
  console.log(props);
  const { activeView } = props;

  if (activeView === "newTicket") {
    return <TicketCreator />;
  }

  if (activeView === "kanban") {
    return <KanbanBoard />;
  }

  return (
    <div className="App">
      <div className="Title">Aloitteista teoiksi</div>
      <div className="TopBar">
        <div className="CreateButton">TEE UUSI ALOITE</div>
        <div className="SearchTool">Haku palkki</div>
        <div className="InfoButton">Info</div>
      </div>
      <KanbanBoard />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    activeView: state.uiReducer.activeView
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setView: view => dispatch(setView(view))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
