import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://www.markgray.com.au/images/gallery/large/desert-light.jpg" />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
