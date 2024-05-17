

import React, { useEffect, useState, useMemo } from "react";
import CountaryCard from "../CountaryCard";
import Shimmer from "../Shimmer";

const CountriesContainerWrape = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);
  const filteredCountries = useMemo(() => {
    return countriesData.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
  }, [countriesData, query]);

  return filteredCountries.length <= 0 ? (
    <Shimmer />
  ) : (
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

export default CountriesContainerWrape;

