import React from "react";

import { setView } from "./store/uiReducer/actions";

import { connect } from "react-redux";

import FrontScreen from "./containers/FrontScreen";

function App(props) {
  console.log(props);
  const { activeView } = props;
  if (activeView === "front") {
    return <FrontScreen setView={props.setView} />;
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
