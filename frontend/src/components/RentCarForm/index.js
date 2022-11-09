import React, { useEffect, useState } from 'react'
import axios from "../../axios";
import "./style.css"

function onSubmitHandler(e) {

}

function RentCarForm() {
    const [cars, setCars] = useState()

    useEffect(()=> {
        const fetchCars = async () =>  {
        const res = await axios.get("/");
        setCars(res.data);
        }
        fetchCars()
    }, [])

  return (
    <form onSubmit={(event) => onSubmitHandler(event)} className="RentCarForm">
        <h2></h2><h2>Rent Car</h2>
        <input type="text" name="firstName" placeholder='First Name'/>
        <input type="text" name="surname" placeholder='Surname'/>
        <input type="text" name="address" placeholder='Address'/>
        <input type="text" name="zipCode" pattern="^\d{2}-\d{3}$" placeholder='Zip Code' />
        <input type="number" name="yearOfBirth" placeholder='Year of birth'/>

        <input type="email" name="email" placeholder='Email' />
        <input type="number" name="phoneNumber" placeholder="Phone number"/>
        <button type="submit">Rent cars!</button>
    </form>
  )
}

export default RentCarForm