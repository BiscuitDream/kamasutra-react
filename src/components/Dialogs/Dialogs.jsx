import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;

  return (
    <li className={styles.dialog}>
      <NavLink to={path} activeClassName={styles.active}>{props.name}</NavLink>
    </li>
  );
};

const Message = (props) => {
  return (
    <li className={styles.message}>{props.message}</li>  /*prop наверно лучше поменять на text*/
  );
};

const Dialogs = (props) => {
  return (
    <section className={styles.dialogsBlock}>
      <ul className={styles.dialogs}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Viktor" id="5" />
        <DialogItem name="Valera" id="6" />
      </ul>
      <ul className={styles.messages}>
        <Message message="Hi" />
        <Message message="How is your Yo?" />
        <Message message="Yo!" />
        <Message message="Yo!" />
        <Message message="Yo!" />
      </ul>
    </section>
  );
};

export default Dialogs;
