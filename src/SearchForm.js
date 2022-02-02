import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { handleSearch, handleClick, query } = useGlobalContext();

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>hacker news archive</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onClick={() => handleClick()}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder='search'
      />
    </form>
  );
};

export default SearchForm;
