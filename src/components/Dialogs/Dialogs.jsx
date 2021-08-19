import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);
  const messagesElements = state.messages.map(elem => <Message text={elem.text} />)
  const newMessageText = state.newMessageText;

  const onSendMessage = () => {
    props.sendNewMessage();
  };

  const onNewMessageChange = (e) => {
    const text = e.target.value;
    props.updateNewMessageText(text);
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
          <textarea value={newMessageText}
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
