import classes from './Profile.module.css'; // TODO переименовать стили в styles
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo userProfile={props.userProfile}
                   status={props.status}
                   updateStatus={props.updateStatus}
                   isOwner={props.isOwner}
                   uploadPhoto={props.uploadPhoto}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
