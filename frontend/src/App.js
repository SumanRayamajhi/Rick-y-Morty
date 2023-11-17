import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import "./App.css";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchData, setFetchData] = useState([]);
  const { info, results } = fetchData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

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
        {" "}
        <span className="RM">R</span>ick Y <span className="RM">M</span>orty
      </h1>
      <Cards results={results} />
    </div>
  );
}

export default App;
