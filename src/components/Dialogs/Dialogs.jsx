import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);
  const messagesElements = props.state.messages.map(elem => <Message text={elem.text} />)

  const messageInputArea = React.createRef();

  const onSendMessage = () => {
    props.sendNewMessage();
  }

  const onNewMessageChange = () => {
    const text = messageInputArea.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <section className={styles.dialogsBlock}>
      <ul className={styles.dialogs}>
        {dialogsElements}
      </ul>
      <div>
        <ul className={styles.messages}>
          {messagesElements}
        </ul>
        <textarea ref={messageInputArea}
                  value={props.state.newMessageText}
                  onChange={onNewMessageChange} />
        <button onClick={onSendMessage}>send message</button>
      </div>
    </section>
  );
};

export default Dialogs;
