import React from "react";
//import RangeSlider from 'react-range-slider-input';
//import axios from "../axios";

class Carrental extends React.Component {
    render(){
        return(
            <div>
                <p>Rental car cost calculator!</p><br /><br />
                <lable>How many kilometers: <input type="number"></input></lable><br /><br />
                <lable>Witch year you get your draving licence: <input type="number"></input></lable><br /><br />
                <label>From: <input type="date"/></label><label> To: <input type="date"/></label><br /><br />
                <label for="cars">Choose a car: 
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </label>
            </div>
        );
    }
}

export default Carrental;
