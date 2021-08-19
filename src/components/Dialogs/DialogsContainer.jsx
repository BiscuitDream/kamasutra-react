import React from "react";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage;

  const onSendMessage = () => {
    const action = sendNewMessageActionCreator();
    props.store.dispatch(action);
  };

  const onNewMessageChange = (text) => {
    const action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return <Dialogs updateNewMessageText={onNewMessageChange}
             sendNewMessage={onSendMessage}
             dialogsPage={state} />;
};

export default DialogsContainer;
