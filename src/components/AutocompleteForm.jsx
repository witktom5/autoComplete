import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getMatches } from '../state/actions';

function AutocompleteForm() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users);
  const matchesState = useSelector((state) => state.matches);

  //  Load users on first render

  useEffect(() => {
    dispatch(fetchUsers);
  }, [dispatch]);

  //  Do something with matches when they are here

  useEffect(() => {
    console.log(matchesState);
  }, [matchesState]);

  //  Find matching usernames

  const checkMatches = (userState, query) =>
    userState.filter(
      (user) => query !== '' && user.username.toLowerCase().startsWith(query)
    );

  //  On text input change dispatch matching usernames

  const onChange = (e) => {
    dispatch(
      getMatches(checkMatches(userState, e.currentTarget.value.toLowerCase()))
    );
  };

  return (
    <>
      <form>
        <label htmlFor='autocompleteInput'>Blaa</label>
        <input type='text' id='autocompleteInput' onChange={onChange} />
      </form>
    </>
  );
}
export default AutocompleteForm;
