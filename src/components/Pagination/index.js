import React from "react";

const Pagination = ({ currentIndex, total, paginationHandler }) => {
  const links = [];

  for (let i = 1; i <= total; i++) {
    links.push(
      <button
        key={`button-${i}`}
        className={`page-btn ${i == currentIndex ? "active" : ""}`}
        onClick={() => paginationHandler(i)}
      >
        {i}
      </button>
    );
  }
  return (<div className="pagination-container">
    {links.map(link => link)}
  </div>);
};

export default Pagination;
