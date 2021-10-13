import React from "react";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const mapDispatchToProps = (dispatch) => { // TODO переделать просто в объект с акш креэйторами и передавать его в connect
  return {
    updateNewMessageText: (text) => {
      const action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    },
    sendNewMessage: () => {
      const action = sendNewMessageActionCreator();
      dispatch(action);
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
