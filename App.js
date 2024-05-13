import React from "react";
import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SelectMenue from "./components/SelectMenue";
import CountriesContainer from "./components/CountriesContainer";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SelectMenue />
        </div>
        <CountriesContainer/>
      </main>
    </>
  );
};

export default App;
