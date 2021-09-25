import React from 'react';
import styles from './Users.module.css';
import userPhoto from "../../assets/images/user.png";
import {Link} from "react-router-dom";
import {api} from "../../api/api";

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

  const onFollow = (id) => { // TODO вынести эти функции не уровень выше
    props.toggleFollowingProgress(true, id);
    api.followUser(id)
      .then(data => {
        if (data.resultCode === 0) {
          props.follow(id);
        }
        props.toggleFollowingProgress(false, id);
      });
  };

  const onUnFollow = (id) => {
    props.toggleFollowingProgress(true, id);
    api.unFollowUser(id).then(data => {
        if (data.resultCode === 0) {
          props.unfollow(id);
        }
      props.toggleFollowingProgress(false, id);
      });
  };

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

      {props.users.map((user) => (
        <div key={user.id}>
        <span>
          <div>
            <Link to={`/profile/${user.id}`}>
              <img className={styles.userPhoto} src={user.photos.small || userPhoto} width="100px" />
            </Link>
          </div>
          <div>
            {user.followed
              ? <button className={styles.followButton} disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {onUnFollow(user.id)}}>Unfollow</button>
              : <button className={styles.followButton} disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {onFollow(user.id)}}>Follow</button>}
          </div>
        </span>
          <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </span>
        </span>
        </div>))}
    </div>
  );
};

export default Users;
