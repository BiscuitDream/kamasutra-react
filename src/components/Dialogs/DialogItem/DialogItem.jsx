import styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;

  return (
    <li className={styles.dialog}>
      <NavLink to={path} activeClassName={styles.active}>{props.name}</NavLink>
    </li>
  );
};

export default DialogItem;
