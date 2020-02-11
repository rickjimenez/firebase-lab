import authTypes from './types';

export const setCurrentUser = user => {
  return {
    type: authTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export const clearCurrentUser = user => {
  return {
    type: authTypes.CLEAR_CURRENT_USER,
    payload: user,
  };
};
