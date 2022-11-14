import React, { useEffect, useState } from "react";
import axios from "../axios";
import RentCarForm from "../components/RentCarForm";
import RentCarFormInfo from "../components/RentCarInfoForm";

function Rentcar(props) {
  const [cars, setCars] = useState();
  const [resList, setResList] = useState([
    {
      whichCar: "",
      fromDate: "",
      toDate: "",
    },
  ]);
  function onSubmitHandler(e) {
    e.preventDefault();
    let obj = e.target;
    resList.forEach((element) => {
      const data = {
        whichCar: element.whichCar,
        whosRenting: obj.firstName + obj.surname,
        from: element.fromDate,
        to: element.toDate,
      };
      rentCar(data);
    });
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
    let reservation = {
      whichCar: "",
      fromDate: "",
      toDate: "",
    };
    setResList([...resList, reservation]);
  };
  const handleReservationRemove = (index) => {
    console.log(index);
    const list = [...resList];
    list.splice(index, 1);
    setResList(list);
  };
  const handleReservationChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...resList];
    list[index][name] = value;
    setResList(list);
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <h1>Rentcat page &#128008;</h1>
      {resList.map((reservation, index) => (
        <div key={index} className="reservationContainer">
          <RentCarForm
            cars={cars}
            value={reservation}
            onChange={(e) => handleReservationChange(e, index)}
          />
          {resList.length > 1 && (
            <button onClick={() => handleReservationRemove(index)}>
              {" "}
              Remove
            </button>
          )}
          {resList.length - 1 === index && (
            <button onClick={handleReservationAdd}>Add Reservation</button>
          )}
        </div>
      ))}
      <RentCarFormInfo />
      <button type="submit">Next</button>
    </form>
  );
}

export default Rentcar;
