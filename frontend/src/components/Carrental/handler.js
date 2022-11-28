const thisYear = new Date().getFullYear();
export default function onChangeHandler(e, setValues, cars) {
  console.log("ZMIANA")
  e.preventDefault();
  let form = document.getElementById("calculatorData")
  //XD
  console.log(form.kilometers)
  let kilometers = form.kilometers.value;

  let fromDate = form.fromDate.value;
  let toDate = form.toDate.value;
  let whenGetDrivinglicence = form.whenGetDrivinglicence.value;
  let carToRent = cars.filter(
    (car) => car.brand + " (" + car.category + ")" === form.carToRent.value
  );

  if (!(kilometers && fromDate && toDate && whenGetDrivinglicence))
    return //alert("Enter all values!");

  if (!(whenGetDrivinglicence <= thisYear && whenGetDrivinglicence >= 1950))
    return //alert("Enter the correct year of getting the driving license!");

  if (new Date(fromDate).getTime() >= new Date(toDate).getTime())
    return //alert("Enter the correct dates!");

  setValues([
    parseInt(kilometers),
    fromDate,
    toDate,
    whenGetDrivinglicence,
    carToRent,
  ]);
}
