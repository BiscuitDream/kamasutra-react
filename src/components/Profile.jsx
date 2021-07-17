import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://www.markgray.com.au/images/gallery/large/desert-light.jpg" />
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={classes.posts}>
          <div className={classes.item}>
            post 1
          </div>
          <div className="item">
            post 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
