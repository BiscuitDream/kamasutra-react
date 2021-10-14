import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';


const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return <Preloader />
  }
// TODO добавить больше инфы
  return (
    <div>
      {/*<div>
        <img src="https://www.markgray.com.au/images/gallery/large/desert-light.jpg" />
      </div>*/}
      <div className={styles.descriptionBlock}>
        <p><img src={props.userProfile.photos.large} /></p>
        <ProfileStatus status={"Hello my friends!"} />
      </div>
    </div>
  );
};

export default ProfileInfo;
