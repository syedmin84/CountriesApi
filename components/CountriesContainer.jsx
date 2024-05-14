import React, { useEffect, useState, useMemo } from "react";
import CountaryCard from "./CountaryCard";

const CountriesContainer = ({ query }) => {
  // State to hold the fetched countries data
  const [countriesData, setCountriesData] = useState([]);

  // useEffect to fetch data from the API when the component mounts
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        // Update the countriesData state with the fetched data
        setCountriesData(data);
      });
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // useMemo to memoize the filteredCountries calculation
  // This calculation runs only when countriesData or query changes
  const filteredCountries = useMemo(() => {
    return countriesData.filter((country) =>
      // Convert country name and query to lowercase for case-insensitive comparison
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
  }, [countriesData, query]); // Dependencies array for useMemo

  return (
    <>
      {/* Display the total count of filtered countries */}
      <div>Total Count: {filteredCountries.length}</div>
      <div className="countries-container">
        {/* Map over the filtered countries and render a CountaryCard for each */}
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
