import React from "react";
import "./style.css";
import "./calculate";
import Calculate from "./calculate";

function round(number) {
  return Math.round(number * 100) / 100;
}

function Step(name, value) {
  if (name)
    return (
      <div>
        <label>{name}</label>
        <p>+ {value}</p>
      </div>
    );
  else return <p></p>;
}

const Result = (props) => {
  if (props.values.length === 0) return;
  let [carRentalCost, step] = Calculate(props.values);
  return (
    <div id="details">
      <div className="containerSteps">
        <h1>Cost Steps</h1>
        {step && step.map((s) => Step(s.name, s.value))}
      </div>
      <div className="containerCost">
        <h1>Summary Cost</h1>
        <label>
          Netto <p>{carRentalCost}</p>
        </label>
        <label>
          Brutto<p>{round(carRentalCost * 1.23)}</p>
        </label>
      </div>
    </div>
  );
};

export default Result;
