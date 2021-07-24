import styles from './Message.module.css'

const Message = (props) => {
  return (
    <li className={styles.message}>{props.text}</li>  /*prop наверно лучше поменять на text*/
  );
};

export default Message;
