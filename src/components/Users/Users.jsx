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
      return <li className={(props.currentPage === num) && styles.selectedPage}
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
              ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
              : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
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
