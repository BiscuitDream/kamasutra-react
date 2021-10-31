import {createSelector} from "reselect";

export const getUsers = (state) => {
  console.log('users selector') // TODO для понимания reselect, удалить потом
  return state.usersPage.users;
};

export const getUsersSelector = createSelector(getUsers, (users) => {
  console.log('getUsersSelector with reselect') // TODO для понимания reselect, удалить потом
   return users.filter(u => true) // TODO для понимания reselect, удалить потом. надуманный пример
});

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};

export const getPortionNumber = (state) => {
  return state.usersPage.portionNumber;
};
