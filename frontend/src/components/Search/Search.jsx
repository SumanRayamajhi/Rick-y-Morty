import React from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";

const Search = ({ setSearch, pageNumber, setPageNumber }) => {
  return (
    <form className="search__area">
      <input
        onChange={(e) => {
          setPageNumber(pageNumber);
          setSearch(e.target.value);
        }}
        placeholder="Search"
        type="text"
      />
      <FaSearch onClick={(e) => e.preventDefault()} className="search__icon" />
    </form>
  );
};

export default Search;
