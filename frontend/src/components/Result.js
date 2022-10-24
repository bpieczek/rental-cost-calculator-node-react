import React from "react";

const miliseconds = 86400000;
const FuelCost = 8;
const thisYear = new Date().getFullYear();

function Result(props){
        console.log(props.values);

        if(props.values.length !== 0)
        {
            let CarRentalCost = 199.99;

            let fromDate = new Date(props.values[1]).getTime()
            let toDate = new Date(props.values[2]).getTime()
            let rentalTimeInDays = (toDate - fromDate) / miliseconds;
            let timeCostMessage = `Cost of renting a car for one day: ${Math.floor(CarRentalCost*100)/100} * ${rentalTimeInDays} days = `
            CarRentalCost *= rentalTimeInDays;
            timeCostMessage += `${Math.floor(CarRentalCost*100)/100}`
            

            let carCategoryCostMessage = `Car price category ${props.values[4][0].category}: ${Math.floor(CarRentalCost*100)/100} + `

            switch(props.values[4][0].category){
                case "Premium":
                    if(thisYear-props.values[3]<3)
                        return alert('You can\'t rent premium car!')
                    
                    CarRentalCost *= 2;
                    carCategoryCostMessage += `100% = ${Math.floor(CarRentalCost*100)/100} \n`
                break;
                case "Medium":
                    CarRentalCost *= 1.6;
                    carCategoryCostMessage += `60% = ${Math.floor(CarRentalCost*100)/100} \n`
                break;
                case "Standard":
                    CarRentalCost *= 1.3;
                    carCategoryCostMessage += `30% = ${Math.floor(CarRentalCost*100)/100} \n`
                break;
                case "Basic":
                    carCategoryCostMessage += `0% = ${CarRentalCost} \n`
                break;
            }

            let newDriversFeeMessage;
            if(thisYear-props.values[3] < 5){
                newDriversFeeMessage = `Fee for unexperienced drivers: ${Math.floor(CarRentalCost*100)/100} + 20% = `
                CarRentalCost *= 1.2;
                newDriversFeeMessage += `${Math.floor(CarRentalCost*100)/100} \n`
            }
            
            let lowAvailabilityFee;
            if(props.values[4][0].howManyCars < 3){
                lowAvailabilityFee = `Fee for low car availability: ${Math.floor(CarRentalCost*100)/100} + 15% = `
                CarRentalCost *= 1.15;
                lowAvailabilityFee += `${Math.floor(CarRentalCost*100)/100} \n`
            }

            let combustionCost = (props.values[0]/100) * props.values[4][0].combustion * FuelCost;
            let combustionCostMessage = `${Math.floor(CarRentalCost*100)/100} + ${combustionCost} (fuel cost per ${props.values[0]} kilometers) = `; 
            
            CarRentalCost += combustionCost;

            combustionCostMessage += `${Math.floor(CarRentalCost*100)/100}`;
            let finalCost = `${Math.floor(CarRentalCost*100)/100} + 23% VAT = ${Math.floor(CarRentalCost*100 * 1.23)/100}`;
            
            return(
                <div>
                    <p>{timeCostMessage}</p>
                    <p>{carCategoryCostMessage}</p>
                    <p>{newDriversFeeMessage}</p>
                    <p>{lowAvailabilityFee}</p>
                    <p>{combustionCostMessage}</p>
                    <p>{finalCost}</p>
                </div>
            );
        }



}

export default Result;