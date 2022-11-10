import React, { useEffect, useState } from "react";
import axios from "../axios";
import RentCarForm from "../components/RentCarForm";
import RentCarFormInfo from "../components/RentCarInfoForm";

function Rentcar(props) {
  const [cars, setCars] = useState();
  const [resList, setResList] = useState([true, true]);
  function onSubmitHandler(e) {
    e.preventDefault();
    let obj = e.target;
    for (let i = 0; i < resList.length; i++) {
      let data = {
        whichCar: obj.carToRent[i].value,
        whosRenting: obj.firstName + obj.surname,
        from: obj.fromDate[i].value,
        to: obj.toDate[i].value,
      };
      rentCar(data);
    }
  }

  async function rentCar(data) {
    await axios.post("/rentcar", data);
  }

  useEffect(() => {
    const fetchCars = async () => {
      const res = await axios.get("/");
      setCars(res.data);
    };
    fetchCars();
  }, []);

  const handleReservationAdd = () => {
    setResList([...resList, true]);
  };
  const handleReservationRemove = (index) => {
    const list = [...resList];
    list.splice(index, 1);
    setResList(list);
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <h1>Rentcat page &#128008;</h1>
      <button onClick={handleReservationAdd}>Add Reservation</button>

      {resList.map((reservation, index) => (
        <div className="reservationContainer">
          <RentCarForm cars={cars} />
          <button onClick={handleReservationRemove}> Remove</button>
        </div>
      ))}
      <RentCarFormInfo />
      <button type="submit">Next</button>
    </form>
  );
}

export default Rentcar;
