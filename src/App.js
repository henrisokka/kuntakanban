import React, { useState } from "react";
import { Modal } from "semantic-ui-react";
import { setView } from "./store/uiReducer/actions";
import { connect } from "react-redux";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import TicketCreator from "./containers/TicketCreator";
import { newTicket } from "./store/kanbanReducer/actions";

import "./App.css";

function App(props) {
  const [showModal, setModal] = useState(false);

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
        <div className="CreateButton" onClick={() => setModal(true)}>
          TEE UUSI ALOITE
        </div>
        <Modal open={showModal}>
          <TicketCreator
            close={() => setModal(false)}
            createTicket={props.createTicket}
          />
        </Modal>

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
    setView: view => dispatch(setView(view)),
    createTicket: card => dispatch(newTicket(card))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
