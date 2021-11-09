const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_PROD':
    case 'UPDATE_PROD':
    case 'DELETE_PROD':
    case 'ADD_REVIEW':
      return {
        ...state,
        ...action.payload,
        message: {
          message: action.payload.message,
          status: 'success',
        },
        isLoading: false,
      };
      // eslint-disable-next-line no-unreachable
      break;

    case 'NEW_PRODUCT':
      return {
        ...state,
        newProducts: action.payload.products,
        isLoading: false,
        message: null,
      };
      // eslint-disable-next-line no-unreachable
      break;

    case 'ALL_PRODUCT':
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        message: null,
      };
      // eslint-disable-next-line no-unreachable
      break;

    case 'FEATURED_PRODUCT':
      return {
        ...state,
        featuredProducts: action.payload.products,
        isLoading: false,
        message: null,
      };
      // eslint-disable-next-line no-unreachable
      break;

    case 'SINGLE_PRODUCT':
      return {
        ...state,
        ...action.payload,
        newProducts: [],
        featuredProducts: [],
        isLoading: false,
      };
      // eslint-disable-next-line no-unreachable
      break;

    case 'CATEGORY_PRODUCT':
      return {
        ...state,
        categoryProducts: action.payload.products,
        newProducts: [],
        featuredProducts: [],
        totalCatProd: action.payload.total,
        product: null,
        isLoading: false,
      };
      // eslint-disable-next-line no-unreachable
      break;

    case 'SEARCHED_PRODUCT':
      return {
        ...state,
        searchedProducts: action.payload.products,
        newProducts: [],
        featuredProducts: [],
        totalSearchProd: action.payload.total,
        product: null,
        isLoading: false,
      };
      // eslint-disable-next-line no-unreachable
      break;

    case 'SET_ERR':
      return {
        ...state,
        message: action.payload,
        isLoading: false,
      };
      // eslint-disable-next-line no-unreachable
      break;

    case 'CLEAR_MSG':
      return {
        ...state,
        message: null,
        isLoading: false,
      };
      // eslint-disable-next-line no-unreachable
      break;

    default:
      return state;
  }
};

export default ProductReducer;
