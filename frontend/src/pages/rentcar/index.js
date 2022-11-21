import React, { useEffect, useState } from "react";
import axios from "../../axios";
import RentCarForm from "../../components/RentCarForm";
import RentCarFormInfo from "../../components/RentCarInfoForm";
import "./style.css";
function Rentcar(props) {
  const [cars, setCars] = useState();
  const [resList, setResList] = useState([
    {
      whichCar: "Audi (Premium)",
      fromDate: "",
      toDate: "",
    },
  ]);
  function onSubmitHandler(e) {
    e.preventDefault();
    let obj = e.target;
    const data = {
      whosRenting: obj.firstName.value + " " + obj.surname.value,
      email: obj.email.value,
      phone: obj.phoneNumber.value,
      adress: obj.address.value,
      zipCode: obj.zipCode.value,
      birthYear: obj.birthYear.value,
      rents: resList,
    };
    console.log(data)
    console.log(resList);
    rentCar(data)
  }

  async function rentCar(data) {

    await axios.post("/rentcar", data);
  }

  useEffect(() => {
    const fetchCars = async () => {
      const res = await axios.get("/");

      let i = 0;
      while (i < res.data.length) {
        if (res.data[i].howManyCars < 1) {
          res.data.splice(i, 1);
        } else {
          ++i;
        }
      }
      setCars(res.data);
    };
    fetchCars();
  }, []);

  const handleReservationAdd = () => {
    let reservation = {
      whichCar: "Audi (Premium)",
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
          <div className="togetherContainer">
            <RentCarForm
              cars={cars}
              value={reservation}
              onChange={(e) => handleReservationChange(e, index)}
            />
            {resList.length > 1 && (
              <button
                onClick={() => handleReservationRemove(index)}
                className="delRes"
              >
                &times;
              </button>
            )}
          </div>

          {resList.length - 1 === index && (
            <button onClick={handleReservationAdd} className="addRes">
              +
            </button>
          )}
        </div>
      ))}
      <RentCarFormInfo />
          <button type="submit">Next</button>
    <div className="alert">
      <span className="closebtn" onClick={(e)=>{console.log(e.target)}}>&times;</span>  
      <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
    </div>

    </form>
  );
}

export default Rentcar;
