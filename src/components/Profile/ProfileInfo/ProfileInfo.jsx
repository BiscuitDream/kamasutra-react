import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const Contact = ({contactTitle, contactValue}) => {
  return (
    <div>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

const ProfileData = ({userProfile, isOwner, goToEditMode}) => { // TODO need to refactor this jsx
  return (
    <div>
      {isOwner ? <div><button onClick={goToEditMode}>edit</button></div> : null}
      <div>
        <b>Full name</b>: {userProfile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {userProfile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {userProfile.lookingForAJob &&
      <div>
        <b>My professional skills</b>: {userProfile.lookingForAJobDescription}
      </div>}
      <div>
        <b>About me</b>: {userProfile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:
        <ul className={styles.contacts}>
          {Object.entries(userProfile.contacts).map(([key, value]) => (
              <li key={key} className={styles.contact}><Contact contactTitle={key} contactValue={value}/></li>))}
        </ul>
      </div>
    </div>
  );
};

const ProfileInfo = ({userProfile, status, updateStatus, isOwner, uploadPhoto, saveProfile}) => {
  const [editMode, setEditMode] = useState(false);

  if (!userProfile) {
    return <Preloader />
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length > 0) {
      uploadPhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formValues) => {
    saveProfile(formValues).then(() => setEditMode(false));
  };

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
        {editMode
          ? <ProfileDataForm initialValues={userProfile} profile={userProfile} onSubmit={onSubmit} />
          : <ProfileData userProfile={userProfile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
