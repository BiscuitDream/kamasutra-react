import styles from './Preloader.module.css';
import {ReactComponent as PreloaderImage} from './preloader.svg';

// https://codepen.io/nikhil8krishnan/pen/rVoXJa
const Preloader = () => { // TODO картинку лучше отцентрировать
  return (
    <div className={styles.overlay}>
      <PreloaderImage className={styles.preloader} />
    </div>
  );
};

export default Preloader;
