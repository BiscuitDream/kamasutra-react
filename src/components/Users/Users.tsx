import React from 'react';
import styles from './Users.module.css';
import Pagination from "../common/Pagination/Pagination";
import User from "./User/User";
import {UserType} from "../../types/types";

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
};

const Users: React.FC<PropsType> = (props) => {
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
