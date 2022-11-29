const thisYear = new Date().getFullYear();
export default function onChangeHandler(e, setValues, cars) {

  let form = document.getElementById("calculatorData");
  let kilometers = form.kilometers.value;

  let fromDate = form.fromDate.value;
  let toDate = form.toDate.value;
  let whenGetDrivinglicence = form.whenGetDrivinglicence.value;
  let carToRent = cars.filter(
    (car) => car.brand + " (" + car.category + ")" === form.carToRent.value
  );
  alert = document.getElementById("alert");
  if (!(kilometers && fromDate && toDate && whenGetDrivinglicence))
    return (alert.innerHTML = "Enter all values!");

  if (!(whenGetDrivinglicence <= thisYear && whenGetDrivinglicence >= 1950))
    return (alert.innerHTML =
      "Enter the correct year of getting the driving license!");

  if (new Date(fromDate).getTime() >= new Date(toDate).getTime())
    return (alert.innerHTML = "Enter the correct date!");

  if (
    thisYear - whenGetDrivinglicence < 3 &&
    carToRent[0].category === "Premium"
  )
    return (alert.innerHTML = "You can't rent Premium Cars");

  alert.innerHTML = "";
  setValues([
    parseInt(kilometers),
    fromDate,
    toDate,
    whenGetDrivinglicence,
    carToRent,
  ]);
}
