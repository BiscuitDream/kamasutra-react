import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);
  const messagesElements = props.state.messages.map(elem => <Message text={elem.text} />)

  // const messageInputArea = React.createRef();

  const onSendMessage = () => { // onSendMessageClick
    // props.sendNewMessage();
    // const action = {type: 'SEND-NEW-MESSAGE'};
    const action = sendNewMessageActionCreator();
    props.dispatch(action);
  };

  const onNewMessageChange = (e) => {
    // const text = messageInputArea.current.value;
    const text = e.target.value;
    // props.updateNewMessageText(text);
    // const action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text};
    const action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <section className={styles.dialogsBlock}>
      <ul className={styles.dialogs}>
        {dialogsElements}
      </ul>
      <div>
        <ul className={styles.messages}>
          {messagesElements}
        </ul>
        <div>
          <textarea value={props.state.newMessageText}
                    onChange={onNewMessageChange}
                    placeholder="Enter your message" />
        </div>
        <div>
          <button onClick={onSendMessage}>Send message</button>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
