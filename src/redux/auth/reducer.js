import authTypes from './types';

const initState = {
  currentUser: null
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case authTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    case authTypes.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
};

export default authReducer;
