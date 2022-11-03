import React from 'react'
import "./style.css"
import axios from "../../axios";

function onSubmitHandler(event) {
    event.preventDefault();
    sendMail();
}
  
async function sendMail() {
    await axios.post("/sendemail");
}

function Contact() {
  return (
    <form onSubmit={(event) => onSubmitHandler(event)} className="Contact">
        <h2>Contact</h2>
        <input type="text" name="name" placeholder='Full Name'/>

        <input type="text" name="name" placeholder='Email'/>
        
        <textarea name="message" id="message" cols="30" rows="10" placeholder='Message...'></textarea>
        
        <button type="submit">Rent cars!</button>
    </form>
  )
}

export default Contact