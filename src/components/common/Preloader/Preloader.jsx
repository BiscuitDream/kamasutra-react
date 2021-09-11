import styles from './Preloader.module.css';
import {ReactComponent as PreloaderImage} from './preloader.svg';

const Preloader = () => { // TODO картинку сделать на весь блок модалкой
  return (
    <div>
      <PreloaderImage className={styles.preloader} />
    </div>
  );
};

export default Preloader;
