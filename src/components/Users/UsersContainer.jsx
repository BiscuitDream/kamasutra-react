import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPage,
  setPortionNumber,
  setTotalUsersCount,
  setUsers,
  toggleFollowingProgress,
  toggleIsFetching,
  unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {api} from "../../api/api";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
      // this.props.toggleIsFetching(true);
      // api.getUsers(this.props.currentPage, this.props.pageSize)
      //   .then(data => {
      //     this.props.toggleIsFetching(false);
      //     this.props.setUsers(data.items);
      //     this.props.setTotalUsersCount(data.totalCount);
      //   });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    // this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);
    // api.getUsers(pageNumber,this.props.pageSize)
    //   .then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //   });
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               followingInProgress={this.props.followingInProgress}
               toggleFollowingProgress={this.props.toggleFollowingProgress}
               portionNumber={this.props.portionNumber}
               setPortionNumber={this.props.setPortionNumber}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => { // TODO возврат можно убрать. Убрать ненужные
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    portionNumber: state.usersPage.portionNumber
  };
};
// TODO убрать ненужные
const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
  setPortionNumber,
  getUsers
})(UsersAPIContainer);

export default UsersContainer;
