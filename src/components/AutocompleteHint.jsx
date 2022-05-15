import React from 'react';
import { setInput, clearMatches } from '../state/actions';
import { useDispatch, useSelector } from 'react-redux';

function AutocompleteHint({ username }) {
  const dispatch = useDispatch();
  const inputState = useSelector((state) => state.form);

  //  Onclick set text input to clicked hint, clear hints

  const onHintClick = () => {
    dispatch(setInput(username));
    dispatch(clearMatches());
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.currentTarget.nextSibling && e.currentTarget.nextSibling.focus();
    }
    if (e.key === 'ArrowUp') {
      e.currentTarget.previousSibling &&
        e.currentTarget.previousSibling.focus();
    }
    if (e.key === 'ArrowUp') {
      e.currentTarget.previousSibling &&
        e.currentTarget.previousSibling.firstElementChild.focus(); // allows to go back to text input with arrows
    }
  };

  return (
    <button
      className='autocomplete-hint'
      onClick={onHintClick}
      tabIndex='0'
      onKeyDown={onKeyDown}
    >
      <span className='highlight'>{username.slice(0, inputState.length)}</span>
      {username.slice(inputState.length)}
    </button>
  );
}
export default AutocompleteHint;
