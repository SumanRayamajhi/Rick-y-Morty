import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Title from "./components/Title/Title";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const { info, results } = fetchData;

  const paginationHandler = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    getRickYMortyApi();
  }, [api, pageNumber, search]);

  const getRickYMortyApi = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setFetchData(data);
  };

  return (
    <div className="App">
      <h1 className="title">
        <span className="RM">R</span>ick Y <span className="RM">M</span>orty
      </h1>
      <Search
        setSearch={setSearch}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <Title />
      <Cards results={results} />
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        paginationHandler={paginationHandler}
        currentNumbersOfItems={fetchData.length}
      />
    </div>
  );
}

export default App;
