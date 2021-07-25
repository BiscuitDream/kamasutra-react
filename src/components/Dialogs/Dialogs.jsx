import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);
  const messagesElements = props.state.messages.map(elem => <Message text={elem.text} />)

  return (
    <section className={styles.dialogsBlock}>
      <ul className={styles.dialogs}>
        {dialogsElements}
      </ul>
      <ul className={styles.messages}>
        {messagesElements}
      </ul>
    </section>
  );
};

export default Dialogs;
