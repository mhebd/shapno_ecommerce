/* eslint-disable no-unreachable */
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'CREATE_ORDER':
      return {
        ...state,
        ...payload,
        message: {
          message: payload.message,
          status: 'success',
        },
        isLoading: false,
      };
      break;

    case 'DELETE_ORDER':
    case 'UPDATE_ORDER':
      return {
        ...state,
        order: null,
        message: {
          message: payload.message,
          status: 'success',
        },
        isLoading: false,
      };
      break;

    case 'GET_ORDERS':
      return {
        ...state,
        ...payload,
        order: null,
        isLoading: false,
      };
      break;

    case 'GET_ORDER':
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
      break;

    case 'GET_USER_ORDERS':
      return {
        ...state,
        order: null,
        userOrders: payload.orders,
        isLoading: false,
      };
      break;

    case 'SET_ERR_MSG':
      return {
        ...state,
        order: null,
        orders: null,
        message: payload,
        isLoading: false,
      };
      break;

    case 'CLEAR_MSG':
      return {
        ...state,
        message: null,
        success: false,
        isLoading: false,
      };
      break;

    case 'CLEAR_STATE':
      return {
        ...state,
        order: null,
        orders: [],
        userOrders: [],
        message: null,
        success: false,
        isLoading: true,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
