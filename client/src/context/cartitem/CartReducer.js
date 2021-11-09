/* eslint-disable no-unreachable */
const CartReducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_ITEMS':
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
      break;

    case 'GET_USER_ITEMS':
      return {
        ...state,
        userCartitems: payload.cartitems,
        isLoading: false,
      };
      break;

    case 'ADD_TO_CART_SUCCESS':
      return {
        ...state,
        message: payload,
        isLoading: false,
      };
      break;

    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        message: payload,
        isLoading: false,
      };
      break;

    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        message: payload,
      };
      break;

    case 'CLEAR_MSG':
      return {
        ...state,
        isLoading: false,
        message: null,
      };
      break;

    default:
      return state;
      break;
  }
};

export default CartReducer;
