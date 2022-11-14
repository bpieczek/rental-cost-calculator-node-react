import React from "react";
import "./style.css";
import Car from "../Car";
let Today = new Date().toISOString().split("T")[0];
const thisYear = new Date().getFullYear();

function RentCarForm(props) {
  return (
    <div className="RentCarForm" onChange={props.onChange}>
      <select name="whichCar" value={props.value.whichCar} required>
        {props.cars &&
          props.cars.map((car) => (
            <Car
              key={car._id}
              id={car._id}
              brand={car.brand}
              category={car.category}
              howManyCars={car.howManyCars}
            />
          ))}
      </select>
      <div className="together">
        <label>
          From:{" "}
          <input
            name="fromDate"
            type="date"
            min={Today}
            value={props.value.fromDate}
            required
          />
        </label>
        <label>
          To:{" "}
          <input
            name="toDate"
            type="date"
            min={Today}
            value={props.value.toDate}
            required
          />
        </label>
      </div>
    </div>
  );
}

export default RentCarForm;
