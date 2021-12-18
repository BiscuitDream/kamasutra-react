import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import {
  follow,
  requestUsers,
  unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount, getUsers, getUsersSelector
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
  currentPage: number,
  pageSize: number,
  users: Array<UserType>,
  isFetching: boolean,
  totalUsersCount: number,
  followingInProgress: Array<number>,
};

type MapDispatchPropsType = {
  requestUsers: (PageNumber: number, pageSize: number) => void,
  unfollow: (userId: number) => void,
  follow: (userId: number) => void
};

type OwnPropsType = {
  pageTitle: string
};

type PropsType = MapStateToPropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    if (this.props.users.length === 0) {
      this.props.requestUsers(currentPage, pageSize);
    }
  }

  onPageChanged = (pageNumber: number) => {
    const {pageSize} = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  }

  render() {
    console.log('RENDER USERS')
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               followingInProgress={this.props.followingInProgress}
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  console.log('mapToState') // TODO для понимания reselect, удалить потом
  return {
    // users: getUsers(state),
    users: getUsersSelector(state), // TODO для понимания reselect, удалить потом
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

/*const connector = connect(mapStateToProps, {
  follow,
  unfollow,
  requestUsers
});
type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsType = PropsFromRedux & OwnPropsType;
export default connector(UsersContainer);*/


//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
export default connect<MapStateToPropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  follow,
  unfollow,
  requestUsers
})(UsersContainer);
