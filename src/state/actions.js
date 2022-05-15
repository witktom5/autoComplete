import axios from 'axios';

export const actions = {
  FETCH_USERS: 'FETCH_USERS',
  SET_INPUT: 'GET_INPUT',
  GET_MATCHES: 'GET_MATCHES',
  CLEAR_MATCHES: 'CLEAR_MATCHES',
};

export const fetchUsers = async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: actions.FETCH_USERS,
    payload: res.data,
  });
};

export const setInput = (input) => {
  return {
    type: actions.SET_INPUT,
    payload: input,
  };
};

export const getMatches = (input) => {
  return {
    type: actions.GET_MATCHES,
    payload: input,
  };
};

export const clearMatches = () => {
  return {
    type: actions.CLEAR_MATCHES,
  };
};
