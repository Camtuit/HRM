import actions from './action';

const { LOADING_USER_LIST, LOAD_USER_SUCCESS } = actions;
const initState = {
  loading: {
    loadingUserList: false,
  },
  error: null,
  payload: {},
  pagination: {},
};
const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING_USER_LIST:
      return {
        ...state,
        loading: {
          ...state.loading,
          loadingUserList: true,
        },
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          loadingUserList: false,
        },
        UserData: action.response.data,

        pagination: action.response.meta.pagination,
      };

    default:
      return {
        ...state,
      };
  }
};
export default UserReducer;
