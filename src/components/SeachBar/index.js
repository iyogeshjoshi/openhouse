import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <div className='searchbar-container'>
      <input type='search' placeholder='Search Here' onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;