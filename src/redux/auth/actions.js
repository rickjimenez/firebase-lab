import authTypes from './types';

export const setCurrentUser = user => {
  return {
    type: authTypes.SET_CURRENT_USER,
    payload: user,
  };
};
