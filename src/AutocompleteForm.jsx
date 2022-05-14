import React, { useEffect } from 'react';
import axios from 'axios';

function AutocompleteForm() {
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <form>
        <label htmlFor='autocompleteInput'>Blaa</label>
        <input type='text' id='autocompleteInput' />
      </form>
    </>
  );
}
export default AutocompleteForm;
