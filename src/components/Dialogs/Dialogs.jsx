import styles from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <section className={styles.dialogsBlock}>
      <ul className={styles.dialogs}>
        <li className={styles.dialog + ' ' + styles.active}>
          Dimych
        </li>
        <li className={styles.dialog}>
          Andrey
        </li>
        <li className={styles.dialog}>
          Sveta
        </li>
        <li className={styles.dialog}>
          Sasha
        </li>
        <li className={styles.dialog}>
          Viktor
        </li>
        <li className={styles.dialog}>
          Valera
        </li>
      </ul>
      <ul className={styles.messages}>
        <li className={styles.message}>Hi</li>
        <li className={styles.message}>How is your Yo?</li>
        <li className={styles.message}>Yo!</li>
      </ul>
    </section>
  );
};

export default Dialogs;
