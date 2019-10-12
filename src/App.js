import React, { useState } from "react";
import { Modal } from "semantic-ui-react";
import { setView, switchTag } from "./store/uiReducer/actions";
import { connect } from "react-redux";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import SearchTool from "./components/SearchTool";
import TicketCreator from "./containers/TicketCreator";
import { newTicket } from "./store/kanbanReducer/actions";

import "./App.css";

function App(props) {
  const [showModal, setModal] = useState(false);

  console.log(props);
  const { activeView } = props;

  return (
    <div className="App">
      <div className="Title">Meidän Mäntsälä</div>
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

        <SearchTool
          tags={props.tags}
          selectedTags={props.selectedTags}
          switchTag={props.switchTag}
        />
        <div className="InfoButton">Info</div>
      </div>
      <KanbanBoard selectedTags={props.selectedTags} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    activeView: state.uiReducer.activeView,
    tags: state.kanbanReducer.tags,
    selectedTags: state.uiReducer.selectedTags
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setView: view => dispatch(setView(view)),
    createTicket: card => dispatch(newTicket(card)),
    switchTag: tag => dispatch(switchTag(tag))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
