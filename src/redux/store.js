import { createStore } from 'redux';

const reducer = (state, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};


export const store = createStore(reducer, ['Use Redux']);
