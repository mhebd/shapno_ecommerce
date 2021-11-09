/* eslint-disable no-unreachable */
const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isLoading: false,
        isAuthenticated: true,
      };
      break;

    case 'UPDATE_USER_PROFILE':
    case 'UPDATE_USER_AVATAR':
    case 'DELETE_USER':
      return {
        ...state,
        ...payload,
        message: {
          message: payload.message,
          status: 'success',
        },
        isLoading: false,
        isAuthenticated: true,
      };
      break;

    case 'GETUSER_SUCCESS':
      return {
        ...state,
        userById: payload.user,
        isLoading: false,
      };
      break;

    case 'GETALLUSER_SUCCESS':
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
      break;

    case 'LOAD_USER':
      return {
        ...state,
        ...payload,
        isLoading: false,
        isAuthenticated: true,
      };
      break;

    case 'CREATE_ERR':
      return {
        ...state,
        user: null,
        token: null,
        message: payload,
        isLoading: false,
        isAuthenticated: false,
      };
      break;

    case 'CLEAR_MSG':
      return {
        ...state,
        message: null,
      };
      break;

    default:
      return state;
  }
};

export default AuthReducer;
