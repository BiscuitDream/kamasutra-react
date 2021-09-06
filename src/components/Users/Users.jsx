import React from 'react';
import styles from './Users.module.css';
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() { // TODO пользователей заменить на список и убрать бредовую разметку. сейчас блочные элементы в строковые вложены
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      const page = <li className={(this.props.currentPage === i) && styles.selectedPage}
                       onClick={() => this.onPageChanged(i)}>{i}</li>;
      pages.push(page);
    }

    return ( // TODO переделать пагинацию. там сейчас список из 100500 страниц
      <div>
        <div>
          <ul className={styles.paginationList}>
            {pages}
          </ul>
        </div>
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
