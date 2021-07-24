import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsData = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' },
  ];

  const messagesData = [
    { id: 1, text: 'Hi'},
    { id: 2, text: 'How is your Yo?'},
    { id: 3, text: 'Yo!'},
    { id: 4, text: 'Yo!'},
    { id: 5, text: 'Yo!'},
  ];

  const dialogsElements = dialogsData.map(elem => <DialogItem name={elem.name} id={elem.id} />);
  const messagesElements = messagesData.map(elem => <Message text={elem.text} />)

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
