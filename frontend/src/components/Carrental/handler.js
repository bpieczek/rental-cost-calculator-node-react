const thisYear = new Date().getFullYear();
export default function onSubmitHandler (e, setValues, cars) {
    e.preventDefault();

    let kilometers = e.target.kilometers.value
    let fromDate = e.target.fromDate.value
    let toDate = e.target.toDate.value
    let whenGetDrivinglicence = e.target.whenGetDrivinglicence.value
    let carToRent = cars.filter(
        (car) => car.brand + " (" + car.category + ")" === e.target.carToRent.value
        )

    if (!(kilometers && fromDate && toDate && whenGetDrivinglicence ))
        return alert("Enter all values!");

    if (!(whenGetDrivinglicence <= thisYear && whenGetDrivinglicence >= 1950))
        return alert("Enter the correct year of getting the driving license!");

    if (new Date(fromDate).getTime() >= new Date(toDate).getTime())
        return alert("Enter the correct dates!");

    setValues([
        parseInt(kilometers),
        fromDate,
        toDate,
        whenGetDrivinglicence,
        carToRent,
    ]);
    
}

