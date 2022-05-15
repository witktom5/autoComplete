import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getMatches, setInput } from '../state/actions';

import AutocompleteHint from './AutocompleteHint';

function AutocompleteForm() {
  const [hintAccepted, setHintAccepted] = useState(true);

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users);
  const matchesState = useSelector((state) => state.matches);
  const inputState = useSelector((state) => state.form);

  //  Load users on first render

  useEffect(() => {
    dispatch(fetchUsers);
  }, [dispatch]);

  //  Find matching usernames

  const checkMatches = (userState, query) =>
    userState.filter(
      (user) => query !== '' && user.username.toLowerCase().startsWith(query)
    );

  //  On text input change dispatch matching usernames

  const onInputChange = (e) => {
    dispatch(setInput(e.currentTarget.value));
    dispatch(
      getMatches(checkMatches(userState, e.currentTarget.value.toLowerCase()))
    );
  };

  return (
    <>
      <form className='autocomplete-form' autoComplete='off'>
        <label htmlFor='autocompleteInput'>Find by username</label>
        <input
          type='text'
          value={inputState}
          id='autocompleteInput'
          className='autocomplete-input'
          onChange={onInputChange}
        />
        {matchesState.map((user, id) => (
          <AutocompleteHint key={id} username={user.username} />
        ))}
      </form>
    </>
  );
}
export default AutocompleteForm;
