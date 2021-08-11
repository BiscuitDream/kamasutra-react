import classes from './Profile.module.css'; // TODO переименовать стили в styles
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
