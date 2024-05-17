import React from "react";
import { Link } from "react-router-dom";

const CountaryCard = (props) => {
  
  return (
    <>
      {/* <Link className="country-card" to={`/country?name=${props.name}`}> */}
      <Link className="country-card" to={`/${props.name}`}>
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
      </Link>
    </>
  );
};

export default CountaryCard;
