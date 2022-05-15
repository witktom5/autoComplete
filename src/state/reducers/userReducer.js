import { actions } from '../actions';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_USERS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default userReducer;
