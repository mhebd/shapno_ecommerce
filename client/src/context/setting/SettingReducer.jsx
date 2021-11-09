/* eslint-disable no-unreachable */
export default (state, { type, payload }) => {
  switch (type) {
    case 'GET_SETTING':
      return { ...state, setting: payload.setting[0], isLoading: false };
      break;

    default:
      return state;
      break;
  }
};
