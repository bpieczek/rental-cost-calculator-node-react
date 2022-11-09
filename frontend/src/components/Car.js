import React from "react";

function Car(props) {
  if(props.howManyCars>0) 
    return (
      <option id={props.id}>
        {props.brand} ({props.category})
      </option>
    );
  else
    return (
      <option id={props.id}>
       
      </option>
    );
}

export default Car;
