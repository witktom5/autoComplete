import { actions } from '../actions';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
