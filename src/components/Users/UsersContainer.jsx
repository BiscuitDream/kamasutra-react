import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  getUsers,
  setPortionNumber,
  unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component { // TODO переименовать. тут апи теперь не используется, можно просто экспорт по дефолту, как в другом файле
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setPortionNumber,
  getUsers
})(UsersContainer);
