import React, { useEffect, useState } from "react";
import SearchBar from "../SeachBar";
import SearchList from "../SearchList";
import Pagination from "../Pagination";
import "./App.css";
import { fetchResult } from "../../utils";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (searchResults.length > 0 && totalPages > 1) {
      setCurrentPage(1);
    }
  }, [totalPages]);

  let timer = 0;
  const getResults = (query, page) => {
    fetchResult(query, page)
      .then((results) => {
        if (
          "searchInformation" in results &&
          parseInt(results.searchInformation.totalResults) > 0
        ) {
          setQuery(query);
          setSearchResults(results.items);
          setTotalPages(
            Math.ceil(parseInt(results.searchInformation.totalResults) / 10)
          );
        }
        console.log(results);
      })
      .catch((error) => {
        console.error("Errow while fetchign api", error);
      });
  };
  const handleSearch = (event) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    const query = event.target.value;
    timer = setTimeout(() => {
      console.log(query);
      getResults(query);
    }, 500);
  };

  const paginationHandler = (page) => {
    try {
      getResults(query, page);
    } catch (error) {}
  };

  return (
    <div className="App">
      <h2>Search Application</h2>
      <SearchBar handleSearch={handleSearch} />
      <SearchList results={searchResults} />
      <Pagination
        currentIndex={currentPage}
        total={totalPages}
        paginationHandler={paginationHandler}
      />
    </div>
  );
}

export default App;
