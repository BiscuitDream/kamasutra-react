import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";


const ProfileInfo = ({userProfile, status, updateStatus, isOwner, uploadPhoto}) => {
  if (!userProfile) {
    return <Preloader />
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length > 0) {
      uploadPhoto(e.target.files[0]);
    }
  }

// TODO добавить больше инфы
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <p><img className={styles.userPhoto} src={userProfile.photos.large || userPhoto} /></p>
        <p>{isOwner && <input type="file"
                              name="profile-pic"
                              accept=".jpg, .jpeg, .png"
                              onChange={onPhotoSelected} />}
        </p>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
