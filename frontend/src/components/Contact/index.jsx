import React from "react";
import "./style.css";
import axios from "../../axios";

function onSubmitHandler(e) {
  e.preventDefault();
  let data = {
    email: e.target.email.value,
    subject: `${e.target.email.value} send you a message!`,
    message: e.target.message.value,
  };
  try {
    sendMail(data);
  }
  catch(err) {
    console.log("Error: "+err)
  }
}

async function sendMail(data) {
  await axios.post("/sendemail", data);
}

function Contact() {
  return (
    <form onSubmit={(event) => onSubmitHandler(event)} className="Contact">
      <h2>Contact</h2>
      <input type="text" name="name" placeholder="Full Name" />

      <input type="text" name="email" placeholder="Email" />

      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Message..."
      ></textarea>

      <button type="submit">Send!</button>
    </form>
  );
}

export default Contact;
