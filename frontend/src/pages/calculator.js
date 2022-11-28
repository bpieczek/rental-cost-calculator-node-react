import React, { useState } from "react";
import Carrental from "../components/Carrental";
import Result from "../components/Result";
function onChangeHandler(e, setValues, cars) {
  console.log("ZMIANA")
  e.preventDefault();

  //XD
  console.log(e.target.value)
  let kilometers = e.target.kilometers.value;
  let fromDate = e.target.fromDate.value;
  let toDate = e.target.toDate.value;
  let whenGetDrivinglicence = e.target.whenGetDrivinglicence.value;
  
  let carToRent = cars.filter(
    (car) => car.brand + " (" + car.category + ")" === e.target.carToRent.value
  );

  setValues([
    parseInt(kilometers),
    fromDate,
    toDate,
    whenGetDrivinglicence,
    carToRent,
  ]);
}

const Calculator = () => {
  const [values, setValues] = useState([]);
  return (
    <section>
      <Carrental setValues={setValues} />
      <Result values={values} />
    </section>
  );
};

export default Calculator;
