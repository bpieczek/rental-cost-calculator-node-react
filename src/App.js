import React, { useState } from "react";
import Carrental from "./components/Carrental";
import Result from "./components/Result";

function App() {
  const [values, setValues] = useState([]);
  return (
    <div className="App">
      <Carrental setValues={setValues} />
      <Result values={values} />
    </div>
  );
}

export default App;
