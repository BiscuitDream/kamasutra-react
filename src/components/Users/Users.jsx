import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {id: 1, photoUrl: 'https://image.flaticon.com/icons/png/512/194/194938.png', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
      {id: 2, photoUrl: 'https://image.flaticon.com/icons/png/512/194/194938.png', followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
      {id: 3, photoUrl: 'https://image.flaticon.com/icons/png/512/194/194938.png', followed: false, fullName: 'Andrey', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}},
    ]);
  }

  return (
    <div>
      {props.users.map((user) => <div key={user.id}>
        <span>
          <div>
            <img className={styles.userPhoto} src={user.photoUrl} width="100px" />
          </div>
          <div>
            {user.followed
              ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
              : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{user.location.country}</div>
            <div>{user.location.city}</div>
          </span>
        </span>
      </div>)}
    </div>
  );
};

export default Users;
