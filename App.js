import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SelectMenue from "./components/SelectMenue";
import CountriesContainer from "./components/CountriesContainer";
const App = () => {
  const [query,setQuery]=useState('');
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenue />
        </div>
        <CountriesContainer query={query}/>
      </main>
    </>
  );
};

export default App;
