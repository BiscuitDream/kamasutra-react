import classes from './Profile.module.css'; // TODO переименовать стили в styles
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <ProfileInfo userProfile={props.userProfile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
