import { actions } from '../actions';

const matchReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_MATCHES:
      return action.payload;
    case actions.CLEAR_MATCHES:
      return [];
    default:
      return state;
  }
};

export default matchReducer;
