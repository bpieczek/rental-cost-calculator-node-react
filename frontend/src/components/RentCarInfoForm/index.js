import React from "react";
import "./style.css";
const thisYear = new Date().getFullYear();
function RentCarForm(props) {
  return (
    <div className="RentCarFormInfo">
      <h2></h2>
      <h2>Personal information</h2>
      <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="surname" placeholder="Surname" />
      <input type="text" name="address" placeholder="Address" />
      <input
        type="text"
        name="zipCode"
        pattern="^\d{2}-\d{3}$"
        placeholder="Zip Code"
      />
      <input
        type="number"
        name="yearOfBirth"
        placeholder="Birth year"
        required
        min="1900"
        max={thisYear - 18}
      />
      <input type="email" name="email" placeholder="Email" />
      <input type="number" name="phoneNumber" placeholder="Phone number" />
    </div>
  );
}

export default RentCarForm;
