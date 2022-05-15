import { actions } from '../actions';

const matchReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_MATCHES:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default matchReducer;
