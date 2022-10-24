import React, {createRef} from "react";
import axios from "../axios";
import Car from "./Car";

import "../css/Carrental.css";

let Today = new Date().toISOString().split('T')[0];
const thisYear = new Date().getFullYear();

class Carrental extends React.Component {
       
        constructor(props) {
            super(props);
            this.setValues = props.setValues;
            this.kilometers = createRef();
            this.fromDate = createRef();
            this.toDate = createRef();
            this.whenGetDrivinglicence = createRef();
            this.carCategory = createRef();
            this.state = {
                cars: []
            };
        }

        componentDidMount() {
            this.fetchCars();
        }
    
        async fetchCars() {
            const res = await axios.get('/')
            const cars = res.data;
    
            this.setState({ cars })
        }

        onSubmitHandler(event){
            event.preventDefault();
            if(
                !(
                    this.kilometers.current.value && 
                    this.fromDate.current.value && 
                    this.toDate.current.value && 
                    this.whenGetDrivinglicence.current.value
                )
            )
                return alert('Enter all values!')

            if(
                !(
                    this.whenGetDrivinglicence.current.value <= thisYear &&
                     this.whenGetDrivinglicence.current.value >= 1950
                )
            )
                return alert(
                    'Enter the correct year of getting the driving license!'
                    )

            if(
                new Date(this.fromDate.current.value).getTime() > new Date(this.toDate.current.value).getTime())
                return alert('Enter the correct dates!')
            

            let carToRent = this.state.cars.filter(
                car => 
                car.brand + " (" + car.category + ")" ===  
                this.carCategory.current.value
            );

            this.setValues([
                this.kilometers.current.value, 
                this.fromDate.current.value, 
                this.toDate.current.value, 
                this.whenGetDrivinglicence.current.value, 
                carToRent
            ]);
            
        }

        render() {
            return (
                <div className="hero">
                    <div className="container">
                        <h1>Rental car cost calculator!</h1>
                        <form onSubmit={(event) => this.onSubmitHandler(event)}>
                            <label>
                                How many kilometers:{' '}
                                <input ref={this.kilometers} type="number"></input>
                            </label>
    
                            <label>
                                The year when you got your driving license:{' '}
                                <input
                                    type="number"
                                    ref={this.whenGetDrivinglicence}></input>
                            </label>
    
                            <div className="together">
                                <label>
                                    From:{' '}
                                    <input
                                        ref={this.fromDate}
                                        type="date"
                                        min={Today}
                                    />
                                </label>
                                <label>
                                    {' '}
                                    To:{' '}
                                    <input
                                        ref={this.toDate}
                                        type="date"
                                        min={Today}
                                    />
                                </label>
                            </div>
                            <label>
                                Choose a car:
                                <select ref={this.carCategory}>
                                    {this.state.cars.map((car) => (
                                        <Car
                                            key={car._id}
                                            id={car._id}
                                            brand={car.brand}
                                            category={car.category}
                                        />
                                    ))}
                                </select>
                            </label>
    
                            <button type="submit">Calculate!</button>
                        </form>
                    </div>
    
                    <a href="#details">
                        <span class="material-symbols-outlined">
                            arrow_downward
                        </span>
                    </a>
                </div>
            )
        }
    }
    export default Carrental
    
