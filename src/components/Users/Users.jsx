import React from 'react';
import styles from './Users.module.css';
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          this.props.setUsers(response.data.items);
        });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get users</button>
        {this.props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img className={styles.userPhoto} src={user.photos.small || userPhoto} width="100px" />
            </div>
            <div>
              {user.followed
                ? <button onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button>
                : <button onClick={() => {this.props.follow(user.id)}}>Follow</button>}
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
  }
}

export default Users;