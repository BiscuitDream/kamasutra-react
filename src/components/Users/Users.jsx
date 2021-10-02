import React from 'react';
import styles from './Users.module.css';
import userPhoto from "../../assets/images/user.png";
import {Link} from "react-router-dom";

const Users = (props) => { // TODO пользователей заменить на список и убрать бредовую разметку. сейчас блочные элементы в строковые вложены
                           // TODO Пагинацию в отдельную компоненту
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const portionSize = 10;
  const portionsCount = Math.ceil(pagesCount / portionSize);
  let leftPortionPageNumber = (props.portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = props.portionNumber * portionSize;

  const pageNumbers = [];
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers
    .filter((num) => (leftPortionPageNumber <= num && num <= rightPortionPageNumber))
    .map((num) => {
      return <li className={props.currentPage === num ? styles.selectedPage : undefined}
                 onClick={() => props.onPageChanged(num)}>{num}</li>
    });

  return (
    <div>
      <div className={styles.pagination}>
        {props.portionNumber > 1 ?
          <button onClick={() => props.setPortionNumber(props.portionNumber - 1)}>Prev</button> :
          null}
        <ul className={styles.paginationList}>
          {pages}
        </ul>
        {props.portionNumber < portionsCount ?
          <button onClick={() => props.setPortionNumber(props.portionNumber + 1)}>Next</button> :
          null}
      </div>

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
