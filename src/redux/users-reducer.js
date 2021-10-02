import {api} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';
const SET_PORTION_NUMBER = 'SET-PORTION-NUMBER';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  portionNumber: 1
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: // TODO нужен переключатель, тогл, а не этот бред
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        })
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };

      case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      };

    case SET_PORTION_NUMBER:
      return {
        ...state,
        portionNumber: action.portionNumber
      };

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId}); // e
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId}); // e
export const setUsers = (users) => ({type: SET_USERS, users}); // e
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage}); // e
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount}); // e
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}); // e
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId}); // e
export const setPortionNumber = (portionNumber) => ({type: SET_PORTION_NUMBER, portionNumber});

export const getUsers = (page, pageSize) => {   // thunk creator принимает в параметры нужные данные и возращает thunk, которая через замыкание может достучаться к этим данным
  return (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(true));
    api.getUsers(page, pageSize)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId)); // TODO мб поменять порядок параметров
    api.followUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    api.unFollowUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unfollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
  };
};

export default usersReducer;
