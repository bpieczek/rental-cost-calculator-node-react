import React from "react";
import axios from "../axios";

function onSubmitHandler(event) {
  event.preventDefault();
  sendMail();
}

async function sendMail() {
  const res = await axios.get("/mail");
  console.log(res);
}

function Rentcar(props) {
  return (
    <section>
      <h1>Rentcat page &#128008;</h1>
      <form onSubmit={(event) => onSubmitHandler(event)}>
        <button type="submit">Send Email!</button>
      </form>
    </section>
  );
}

export default Rentcar;
