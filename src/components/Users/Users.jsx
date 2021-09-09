import React from 'react';
import styles from './Users.module.css';
import userPhoto from "../../assets/images/user.png";

const Users = (props) => { // TODO пользователей заменить на список и убрать бредовую разметку. сейчас блочные элементы в строковые вложены
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    const page = <li className={(props.currentPage === i) && styles.selectedPage}
                     onClick={() => props.onPageChanged(i)}>{i}</li>; // TODO по идее надо обработчик вешать не на все страницы, а на список просто
    pages.push(page);
  }

  return ( // TODO переделать пагинацию. там сейчас список из 100500 страниц
    <div>
      <div>
        <ul className={styles.paginationList}>
          {pages}
        </ul>
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
        <span>
          <div>
            <img className={styles.userPhoto} src={user.photos.small || userPhoto} width="100px" />
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
