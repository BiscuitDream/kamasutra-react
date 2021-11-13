import React from 'react';
import styles from './User.module.css';
import userPhoto from "../../../assets/images/user.png";
import {Link} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
  return (
    <div>
      <div>
        <p>
          <Link to={`/profile/${user.id}`}>
            <img className={styles.userPhoto} src={user.photos.small || userPhoto} width="100px"/>
          </Link>
        </p>
        <div>
          {user.followed
            ? <button className={styles.followButton}
                      disabled={followingInProgress.some(id => id === user.id)}
                      onClick={() => {unfollow(user.id)}}>
              Unfollow</button>
            : <button className={styles.followButton}
                      disabled={followingInProgress.some(id => id === user.id)}
                      onClick={() => {follow(user.id)}}>
              Follow</button>}
        </div>
      </div>
      <div>
        <div>{user.name}</div>
        <div>{user.status}</div>
        <div>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
