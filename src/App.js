import React from 'react';
import AutocompleteForm from './components/AutocompleteForm';
import { Provider } from 'react-redux';
import store from './state/store.js';

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <h1>Autocomplete form</h1>
        <AutocompleteForm />
      </div>
    </Provider>
  );
};

export default App;
