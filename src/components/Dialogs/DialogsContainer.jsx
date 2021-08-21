import React from "react";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const mapDispatchToProps = (dispatch) => {
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
