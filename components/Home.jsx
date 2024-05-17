import React, { useState } from "react";
import Header from "./Header";
import "../App.css";
import SearchBar from "./SearchBar";
import SelectMenue from "./SelectMenue";
import CountriesContainer from "./CountriesContainer";
const Home = () => {
    const [query,setQuery]=useState('');
  return (
    
    <>
   
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenue />
        </div>
        <CountriesContainer query={query} />
      </main>
    </>
  );
};

export default Home;
