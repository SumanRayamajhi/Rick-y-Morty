import React from "react";
import "./pagination.css";

const Pagination = ({ pageNumber, setPageNumber }) => {
  const next = () => {
    if (pageNumber === pageNumber.length) return;
    setPageNumber((previous) => previous + 1);
  };
  const prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((previous) => previous - 1);
  };
  return (
    <div className="pagination">
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Pagination;
