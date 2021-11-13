import React from 'react';
import styles from './Users.module.css';
import userPhoto from "../../assets/images/user.png";
import {Link} from "react-router-dom";
import Pagination from "../common/Pagination/Pagination";

const Users = (props) => { // TODO пользователей заменить на список и убрать бредовую разметку. сейчас блочные элементы в строковые вложены
  return (
    <div>
      <Pagination totalUsersCount={props.totalUsersCount}
                  pageSize={props.pageSize}
                  portionNumber={props.portionNumber}
                  currentPage={props.currentPage}
                  onPageChanged={props.onPageChanged}
                  setPortionNumber={props.setPortionNumber} />

      <ul className={styles.usersList}>
        {props.users.map((user) => (
          <li key={user.id}>
            <div>
              <p>
                <Link to={`/profile/${user.id}`}>
                  <img className={styles.userPhoto} src={user.photos.small || userPhoto} width="100px"/>
                </Link>
              </p>
              <div>
                {user.followed
                  ? <button className={styles.followButton}
                            disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => {props.unfollow(user.id)}}>
                    Unfollow</button>
                  : <button className={styles.followButton}
                            disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => {props.follow(user.id)}}>
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
          </li>))}
      </ul>
    </div>
  );
};

export default Users;
