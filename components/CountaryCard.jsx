import React from "react";

const CountaryCard = (props) => {
  return (
    <>
      {/* href={`/country.html?name=${country.name.common}`} */}
      <a className="country-card">
        <img src={props.flag} alt={`${props.name} flag`} />
        <div className="card-text">
          <h3 className="card-title">{props.name}</h3>
          <p>
            <b>Population: </b>
            {props.population.toLocaleString("en-PE")}
          </p>
          <p>
            <b>Region: </b>
            {props.region}
          </p>
          <p>
            <b>Capital: </b>
            {props.capital}
          </p>
        </div>
      </a>
    </>
  );
};

export default CountaryCard;
