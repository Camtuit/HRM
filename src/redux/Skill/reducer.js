import actions from './action';

const initState = {
  loading: {
    loadingSkillList: false,
    loadingSkillDetail: false,
  },
  skillData: [],
  dataTable: [],
  pagination: {},
  skillDetail: {},
};

const SkillReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.LOAD_SKILL_LIST_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          loadingSkillList: false,
        },
        skillData: action.response.data,
        dataTable: action.response.data.map((item, index) => ({
          ...item,
          number:
            index +
            action.response.meta.pagination.current_page *
              action.response.meta.pagination.per_page -
            9,
        })),
        pagination: action.response.meta.pagination,
      };
    case actions.LOADING_SKILL_LIST:
      return {
        ...state,
        loading: {
          ...state.loading,
          loadingSkillList: true,
        },
      };
    case actions.LOAD_SKILL_DETAIL_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          loadingSkillDetail: false,
        },
        skillDetail: action.response.data,
      };
    case actions.LOADING_SKILL_DETAIL:
      return {
        ...state,
        loading: {
          ...state.loading,
          loadingSkillDetail: true,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default SkillReducer;
