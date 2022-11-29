import React from "react";
import "./style.css";
const thisYear = new Date().getFullYear();
function RentCarForm(props) {
  return (
    <div className="RentCarFormInfo">
      <h2>Personal information</h2>
      <div>
        <label>
          <input type="text" name="firstName" placeholder="First Name" required />
          <input type="text" name="surname" placeholder="Surname" required />
          <input
          type="number"
          name="birthYear"
          placeholder="Birth year"
          required
          min="1900"
          max={thisYear - 18}
        />
        </label>
        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone number"
          require
        />
        <input type="email" name="email" placeholder="Email" required />

        <input type="text" name="address" placeholder="Address" required />
        <input
          type="text"
          name="zipCode"
          pattern="^\d{2}-\d{3}$"
          placeholder="Zip Code"
          required
        />


      </div>
    </div>
  );
}

export default RentCarForm;
