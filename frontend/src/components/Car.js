import React from "react";

function Car(props) {
  return (
    <option id={props.id}>
      {props.brand} ({props.category})
    </option>
  );
}

export default Car;
