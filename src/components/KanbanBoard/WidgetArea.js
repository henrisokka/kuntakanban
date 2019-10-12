import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

function WidgetArea(props) {
  const isAdmin = props.userRole === "admin";

  return <div>{isAdmin ? <Button>Lisää työkalu</Button> : ""}</div>;
}

const mapStateToProps = state => {
  return {
    userRole: state.uiReducer.userRole
  };
};

export default connect(mapStateToProps)(WidgetArea);
