import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               updateNewPostText={props.updateNewPostText}
               addPost={props.addPost} />
    </div>
  );
};

export default Profile;
