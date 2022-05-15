import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getMatches, setInput } from '../state/actions';

import AutocompleteHint from './AutocompleteHint';

function AutocompleteForm() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users);
  const matchesState = useSelector((state) => state.matches);
  const inputState = useSelector((state) => state.form);

  //  Load users on first render

  useEffect(() => {
    dispatch(fetchUsers);
  }, [dispatch]);

  //  Find matching usernames, sort alphabetically

  const checkMatches = (userState, query) =>
    userState
      .filter(
        (user) => query !== '' && user.username.toLowerCase().startsWith(query)
      )
      .sort((a, b) => a.username.localeCompare(b.username));

  //  On text input change dispatch matching usernames

  const onInputChange = (e) => {
    dispatch(setInput(e.currentTarget.value));
    dispatch(
      getMatches(checkMatches(userState, e.currentTarget.value.toLowerCase()))
    );
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.currentTarget.nextSibling && e.currentTarget.nextSibling.focus();
    }
  };

  return (
    <>
      <form className='autocomplete-form' autoComplete='off'>
        <label htmlFor='autocompleteInput'>Find by username</label>
        <div className='autocomplete-input-container' onKeyDown={onKeyDown}>
          <input
            type='text'
            value={inputState}
            id='autocompleteInput'
            className='autocomplete-input'
            onChange={onInputChange}
          />
          <button
            className='autocomplete-button'
            onClick={(e) => e.preventDefault()}
          >
            Submit
          </button>
        </div>
        {matchesState.map((user, id) => (
          <AutocompleteHint key={id} username={user.username} />
        ))}
      </form>
    </>
  );
}
export default AutocompleteForm;
