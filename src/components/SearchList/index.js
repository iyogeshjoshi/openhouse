import React from 'react';
import SearchItem from '../SearchItem';
import './style.css';

const SearchList = ({ results = [] }) => {
  console.log('Search list', results);
  return (
    <div className="search-result-container">
      {results.map((result, index) => (
        <SearchItem key={`search-item-${index}`} item={result}>result item</SearchItem>
      ))}
    </div>
  );
}

export default SearchList;