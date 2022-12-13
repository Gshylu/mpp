import React from "react"
//import PizzasContainer from "./serach";

const PizzaList = (props) =>{
    return(
        <div>
            <label htmlFor="search">Search by name</label>
            <input type="text" value={props.inputValue} onChange={props.pizzaFilterOnChange}/>
        </div>
    )
 }

 export default PizzaList;