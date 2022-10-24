import React from "react";
import "../css/Result.css";

const miliseconds = 86400000;
const FuelCost = 8;
const thisYear = new Date().getFullYear();

function roundToTwoDecimal(number) {
  return Math.round(number * 100) / 100;
}

function Result(props) {
  if (props.values.length !== 0) {
    let CarRentalCost = 199.99;

    let fromDate = new Date(props.values[1]).getTime();
    let toDate = new Date(props.values[2]).getTime();
    let rentalTimeInDays = (toDate - fromDate) / miliseconds;
    let timeCostMessage = `Cost of renting a car for one day: ${roundToTwoDecimal(
      CarRentalCost
    )} * ${rentalTimeInDays} days = `;

    CarRentalCost *= rentalTimeInDays;
    timeCostMessage += `${roundToTwoDecimal(CarRentalCost)}`;

    let carCategoryCostMessage = `Car price category ${
      props.values[4][0].category
    }: ${roundToTwoDecimal(CarRentalCost)} + `;

    switch (props.values[4][0].category) {
      case "Premium":
        if (thisYear - props.values[3] < 3)
          return alert("You can't rent premium car!");

        CarRentalCost *= 2;
        carCategoryCostMessage += `100% = ${roundToTwoDecimal(
          CarRentalCost
        )} \n`;
        break;
      case "Medium":
        CarRentalCost *= 1.6;
        carCategoryCostMessage += `60% = ${roundToTwoDecimal(
          CarRentalCost
        )} \n`;
        break;
      case "Standard":
        CarRentalCost *= 1.3;
        carCategoryCostMessage += `30% = ${roundToTwoDecimal(
          CarRentalCost
        )} \n`;
        break;
      case "Basic":
      default:
        carCategoryCostMessage += `0% = ${CarRentalCost} \n`;
        break;
    }

    let newDriversFeeMessage;
    if (thisYear - props.values[3] < 5) {
      newDriversFeeMessage = `Fee for unexperienced drivers: ${roundToTwoDecimal(
        CarRentalCost
      )} + 20% = `;
      CarRentalCost *= 1.2;
      newDriversFeeMessage += `${roundToTwoDecimal(CarRentalCost)} \n`;
    }

    let lowAvailabilityFee;
    if (props.values[4][0].howManyCars < 3) {
      lowAvailabilityFee = `Fee for low car availability: ${roundToTwoDecimal(
        CarRentalCost
      )} + 15% = `;
      CarRentalCost *= 1.15;
      lowAvailabilityFee += `${roundToTwoDecimal(CarRentalCost)} \n`;
    }

    let combustionCost =
      (props.values[0] / 100) * props.values[4][0].combustion * FuelCost;
    let combustionCostMessage = `${roundToTwoDecimal(
      CarRentalCost
    )} + ${combustionCost} (fuel cost per ${props.values[0]} kilometers) = `;

    CarRentalCost += combustionCost;

    combustionCostMessage += `${roundToTwoDecimal(CarRentalCost)}`;
    let finalCost = `${roundToTwoDecimal(
      CarRentalCost
    )} + 23% VAT = ${roundToTwoDecimal(CarRentalCost * 1.23)}`;

    return (
      <div id="details">
        <div className="container">
          <p>{timeCostMessage}</p>
          <p>{carCategoryCostMessage}</p>
          <p>{newDriversFeeMessage}</p>
          <p>{lowAvailabilityFee}</p>
          <p>{combustionCostMessage}</p>
          <p>{finalCost}</p>
        </div>
      </div>
    );
  }
}

export default Result;
