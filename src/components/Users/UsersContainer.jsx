import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  requestUsers,
  setPortionNumber,
  unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize, getPortionNumber,
  getTotalUsersCount, getUsers, getUsersSelector
} from "../../redux/users-selectors";

class UsersContainer extends React.Component { // TODO переименовать. тут апи теперь не используется, можно просто экспорт по дефолту, как в другом файле
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    if (this.props.users.length === 0) {
      this.props.requestUsers(currentPage, pageSize);
    }
  }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  }

  render() {
    console.log('RENDER USERS')
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

/*const mapStateToProps = (state) => { // TODO возврат можно убрать. Убрать ненужные
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    portionNumber: state.usersPage.portionNumber
  };
};*/

const mapStateToProps = (state) => {
  console.log('mapToState') // TODO для понимания reselect, удалить потом
  return {
    // users: getUsers(state),
    users: getUsersSelector(state), // TODO для понимания reselect, удалить потом
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    portionNumber: getPortionNumber(state)
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setPortionNumber,
  requestUsers
})(UsersContainer);
