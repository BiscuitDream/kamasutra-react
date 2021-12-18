import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

export const getUsers = (state: AppStateType) => {
  console.log('users selector') // TODO для понимания reselect, удалить потом
  return state.usersPage.users;
};

export const getUsersSelector = createSelector(getUsers, (users) => {
  console.log('getUsersSelector with reselect') // TODO для понимания reselect, удалить потом
   return users.filter(u => true) // TODO для понимания reselect, удалить потом. надуманный пример
});

export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress;
};
