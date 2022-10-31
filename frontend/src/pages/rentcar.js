import React from "react";
import axios from "../axios";

function onSubmitHandler(event) {
  event.preventDefault();
  sendMail();
}

async function sendMail() {
  await axios.post("/sendemail");
}

function Rentcar(props) {
  return (
    <section>
      <h1>Rentcat page &#128008;</h1>
      <form onSubmit={(event) => onSubmitHandler(event)}>
        <button type="submit">Rent cars!</button>
      </form>
    </section>
  );
}

export default Rentcar;
