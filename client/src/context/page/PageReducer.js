/* eslint-disable no-unreachable */
const PageReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CREATE_PAGE':
    case 'UPDATED_PAGE':
    case 'DELETE_PAGE':
    case 'GET_PAGE':
    case 'GET_PAGES':
      return {
        ...state,
        ...payload,
        isLoading: false,
        message: {
          message: payload?.message,
          status: 'success',
        },
      };
      break;

    case 'CLEAR_MSG':
      return {
        ...state,
        ...payload,
        isLoading: false,
        message: null,
      };
      break;

    case 'SET_ERRMSG':
      return {
        ...state,
        isLoading: false,
        page: null,
        pages: [],
        message: payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default PageReducer;
