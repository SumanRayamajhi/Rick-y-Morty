import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import "./App.css";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [fetchData, setFetchData] = useState([]);
  const { info, results } = fetchData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    getRickYMortyApi();
  }, [api]);

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
      <Cards results={results} />
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
