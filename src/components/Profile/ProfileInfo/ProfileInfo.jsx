import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src="https://www.markgray.com.au/images/gallery/large/desert-light.jpg" /> // TODO добавить больше инфы
      </div>
      <div className={styles.descriptionBlock}>
        <p><img src={props.userProfile.photos.large} /></p>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
