import classes from './Profile.module.css'; // TODO переименовать стили в styles
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
