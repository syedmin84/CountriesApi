import React from "react";
import CountaryCard from "./CountaryCard";
import countriesData from "../countriesData";
const CountriesContainer = () => {
  return (
    <div className="countries-container">
      {countriesData.map((country) => {
        return (
          <CountaryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        );
      })}
    </div>
  );
};

export default CountriesContainer;
