import React from "react";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().dialogsPage;

        const onSendMessage = () => {
          const action = sendNewMessageActionCreator();
          store.dispatch(action);
        };

        const onNewMessageChange = (text) => {
          const action = updateNewMessageTextActionCreator(text);
          store.dispatch(action);
        };

        return (<Dialogs updateNewMessageText={onNewMessageChange}
                         sendNewMessage={onSendMessage}
                         dialogsPage={state} />);
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
