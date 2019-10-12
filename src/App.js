import React from "react";
import { setView } from "./store/uiReducer/actions";
import { connect } from "react-redux";
import FrontScreen from "./containers/FrontScreen";
import KanbanView from "./containers/KanbanView";
import TicketCreator from "./containers/TicketCreator";

function App(props) {
  console.log(props);
  const { activeView } = props;
  if (activeView === "front") {
    return <FrontScreen setView={props.setView} />;
  }

  if (activeView === "newTicket") {
    return <TicketCreator />;
  }

  if (activeView === "kanban") {
    return <KanbanView />;
  }

  return <div className="App">ffoooo</div>;
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
