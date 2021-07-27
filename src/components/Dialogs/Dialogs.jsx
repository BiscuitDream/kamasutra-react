import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);
  const messagesElements = props.state.messages.map(elem => <Message text={elem.text} />)

  const messageInputArea = React.createRef();

  const onSendMessage = () => {
    const text = messageInputArea.current.value;
    alert(text);
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
        <textarea ref={messageInputArea}></textarea>
        <button onClick={onSendMessage}>send message</button>
      </div>
    </section>
  );
};

export default Dialogs;
