const miliseconds = 86400000;
const FuelCost = 8;
const thisYear = new Date().getFullYear();

function round(number) {
    return Math.round(number * 100) / 100;
}

function Calculate(values) {
    let CarRentalCost = 199.99;
    let Steps = []
    let fromDate = new Date(values[1]).getTime();
    let toDate = new Date(values[2]).getTime();

    CarRentalCost *= (toDate - fromDate) / miliseconds; //rentalTimeInDays
    Steps = [...Steps, {name:`Rent Time`, value: round(CarRentalCost)}]
    let tmp = CarRentalCost
    
    switch (values[4][0].category) {
        case "Premium":
            if (thisYear - values[3] < 3)
                return alert("You can't rent premium car!");
            CarRentalCost *= 2;
            break;
        case "Medium":
            CarRentalCost *= 1.6;
            break;
        case "Standard":
            CarRentalCost *= 1.3;
            break;
        case "Basic":
        default:
            break;
    }

    Steps = [...Steps, {name:"Car Category", value:round(CarRentalCost-tmp)}]

    if (thisYear - values[3] < 5) {
        Steps = [...Steps, {name:"New Driver Fee", value:round(CarRentalCost*0.2)}]
        CarRentalCost *= 1.2;
    }

    let lowAvailabilityFee;
    if (values[4][0].howManyCars < 3) {
        Steps = [...Steps, {name:"Low Availability Fee", value:round(CarRentalCost*0.15)}]
        CarRentalCost *= 1.15;
    }

    let combustionCost =
        (values[0] / 100) * values[4][0].combustion * FuelCost;

    CarRentalCost += combustionCost;
    Steps = [...Steps, {name:"Combustion Cost", value:round(combustionCost)}]

    console.log(CarRentalCost)
    return [round(CarRentalCost), Steps]
}
export default Calculate