import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Car from "../Car";
import "./style.css";
import onChangeHandler from "./handler";
let Today = new Date().toISOString().split("T")[0];
const thisYear = new Date().getFullYear();

const Carrental = (props) => {
  const [cars, setCars] = useState();

  useEffect(() => {
    const fetchCars = async () => {
      const res = await axios.get("/");
      setCars(res.data);
    };
    fetchCars();
  }, []);

  return (
    <header className="hero">
      <div className="container">
        <h1>Rental car cost calculator!</h1>
        <form
          onSubmit={(event) => onChangeHandler(event, props.setValues, cars)}
        >
          <label>
            How many kilometers:{" "}
            <input name="kilometers" type="number" required min="0"></input>
          </label>

          <label
            data-warning-text={`The value must be between 1950 and ${thisYear}`}
          >
            The year when you got your driving license:{" "}
            <input
              name="whenGetDrivinglicence"
              type="number"
              required
              min="1950"
              max={thisYear}
            ></input>
          </label>

          <div className="together">
            <label>
              From: <input name="fromDate" type="date" min={Today} required />
            </label>
            <label>
              {" "}
              To: <input name="toDate" type="date" min={Today} required />
            </label>
          </div>
          <label>
            Choose a car:
            <select name="carToRent" required>
              {cars &&
                cars.map((car) => (
                  <Car
                    key={car._id}
                    id={car._id}
                    brand={car.brand}
                    category={car.category}
                  />
                ))}
              ]
            </select>
          </label>
          <button type="submit">Calculate!</button>
        </form>
      </div>
    </header>
  );
};

export default Carrental;
