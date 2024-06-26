import React, { useEffect, useState, useMemo } from "react";
import CountaryCard from "./CountaryCard";
import Shimmer from "./Shimmer";
import Error from "./Error"; 

const CountriesContainer = ({ query }) => {
  // State to hold the fetched countries data
  const [countriesData, setCountriesData] = useState([]);

  // useEffect to fetch data from the API when the component mounts
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error);
      });
  }, []);

  const filteredCountries = useMemo(() => {
    return countriesData.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
  }, [countriesData, query]);

  // Conditional rendering based on data availability and search results
  if (countriesData.length === 0) {
    return <Shimmer />; // Show shimmer while data is being fetched
  }

  if (filteredCountries.length === 0) {
    return <Error />;
  }

  // Show the list of countries if data is available
  return (
    <>
      <div>Total Count: {filteredCountries.length}</div>
      <div className="countries-container">
        {filteredCountries.map((country) => (
          <CountaryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        ))}
      </div>
    </>
  );
};

export default CountriesContainer;



