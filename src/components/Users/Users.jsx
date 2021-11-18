import React from 'react';
import styles from './Users.module.css';
import Pagination from "../common/Pagination/Pagination";
import User from "./User/User";

const Users = (props) => { // TODO пользователей заменить на список и убрать бредовую разметку. сейчас блочные элементы в строковые вложены
  return (
    <div>
      <Pagination totalItemsCount={props.totalUsersCount}
                  pageSize={props.pageSize}
                  currentPage={props.currentPage}
                  onPageChanged={props.onPageChanged} />

      <ul className={styles.usersList}>
        {props.users.map((user) =>  (
          <li key={user.id}>
            <User user={user}
                  followingInProgress={props.followingInProgress}
                  unfollow={props.unfollow}
                  follow={props.follow} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
