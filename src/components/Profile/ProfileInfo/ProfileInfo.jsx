import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://www.markgray.com.au/images/gallery/large/desert-light.jpg" />
      </div>
      <div className={styles.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
