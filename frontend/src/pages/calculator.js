import React, { useState } from "react";
import Carrental from "../components/Carrental";
import Result from "../components/Result";

const Calculator = () => {
  const [values, setValues] = useState([]);
  return (
    <section>
      <Carrental setValues={setValues} />
      <section>
        <p id="alert"></p>
      </section>
      <Result values={values} />
    </section>
  );
};

export default Calculator;
