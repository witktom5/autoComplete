import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, setInput } from '../state/actions';

function AutocompleteForm() {
  const dispatch = useDispatch();

  //  Load users on first render

  useEffect(() => {
    dispatch(fetchUsers);
  });

  const onChange = (e) => {
    dispatch(setInput(e.target.value));
  };

  useSelector((state) => console.log(state.form));

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
