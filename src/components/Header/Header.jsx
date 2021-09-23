import styles from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://www.vhv.rs/dpng/d/573-5732595_logo-maker-shop-make-your-logo-in-5.png" width="50px" />
      <div className={styles.loginBlock}>
        {props.isAuth
          ? <p>{props.login}</p>
          : <Link className={styles.loginLink} to={"/login"}>Login</Link>}
      </div>
    </header>
  );
};

export default Header;
