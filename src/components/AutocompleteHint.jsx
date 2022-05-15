import React from 'react';
import { setInput, clearMatches } from '../state/actions';
import { useDispatch } from 'react-redux';

function AutocompleteHint({ username }) {
  const dispatch = useDispatch();

  const onHintClick = () => {
    dispatch(setInput(username));
    dispatch(clearMatches());
  };

  return (
    <div className='autocomplete-hint' onClick={onHintClick}>
      {username}
    </div>
  );
}
export default AutocompleteHint;
