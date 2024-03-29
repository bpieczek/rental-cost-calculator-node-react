import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Car from "../Car";
import "./style.css";
import onChangeHandler from "./handler";
let Today = new Date().toISOString().split("T")[0];
const thisYear = new Date().getFullYear();

const Carrental = (props) => {
  const [rangeValue, setRangeValue] = useState(500);
  const [cars, setCars] = useState();
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get("/");
        let i = 0;
        while (i < res.data.length) {
          if (res.data[i].howManyCars < 1) {
            res.data.splice(i, 1);
          } else {
            ++i;
          }
        }
        setCars(res.data);
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    fetchCars();
  }, []);

  return (
    <header className="hero">
      <div className="container">
        <h1>Rental car cost calculator!</h1>
        <form
          id="calculatorData"
          onChange={(event) => onChangeHandler(event, props.setValues, cars)}
        >
          <label>
            <label>I want to drive {rangeValue} kilometers</label>
            <input
              name="kilometers"
              type="range"
              required
              min="0"
              defaultValue="500"
              max="2000"
              id="rangeKM"
              onInput={(e) => setRangeValue(e.target.value)}
            ></input>
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
              defaultValue="2000"
            ></input>
          </label>

          <div className="together">
            <label>
              From:{" "}
              <input
                name="fromDate"
                type="date"
                min={Today}
                required
                defaultValue={Today}
              />
            </label>
            <label>
              {" "}
              To:{" "}
              <input
                name="toDate"
                type="date"
                min={Today}
                required
                defaultValue={Today}
              />
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
                    howManyCars={car.howManyCars}
                  />
                ))}
            </select>
          </label>
        </form>
      </div>
    </header>
  );
};

export default Carrental;
