/* eslint-disable no-unreachable */
const Reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_CAT':
    case 'UPDATE_CAT':
    case 'DELETE_CAT':
      return {
        ...state,
        message: {
          message: action.payload.message,
          status: 'success',
        },
        isLoading: false,
      };
      break;

    case 'GET_CATEGORIES':
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
      break;

    case 'GET_CATEGORY':
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
      break;

    case 'SET_ERROR':
      return {
        ...state,
        message: {
          message: action.payload,
          status: 'error',
        },
        isLoading: false,
      };
      break;

    case 'CLEAR_MSG':
      return {
        ...state,
        message: null,
        isLoading: false,
      };
      break;

    default:
      return state;
  }
};

export default Reducer;
