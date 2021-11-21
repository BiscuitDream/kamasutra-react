import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";


const ProfileInfo = ({userProfile, status, updateStatus}) => {
  if (!userProfile) {
    return <Preloader />
  }
// TODO добавить больше инфы
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <p><img className={styles.userPhoto} src={userProfile.photos.large || userPhoto} /></p>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
