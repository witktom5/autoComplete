import { actions } from '../actions';

const formReducer = (state = '', action) => {
  switch (action.type) {
    case actions.SET_INPUT:
      return action.payload;
    default:
      return state;
  }
};

export default formReducer;
