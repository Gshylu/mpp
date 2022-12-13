

import React, { Component } from "react";
import axios from 'axios';
import PizzaList  from "./list"


export default class PizzasContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pizzas: [],
      pizza:{},
      isPizzaViewOn:false,
      sortValue:'',
      inputValue:'',
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/pizzas/')
      .then(res => {
        this.setState({
          pizzas: res.data
         
        }); console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
  
  }
  
  
  
  componentDidMount() {
      axios.get('http://localhost:4000/pizzas/')
        .then(res => {
          this.setState({
            pizzas: res.data
           
          }); console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    pizzaFilterOnChange = (event) => {
      console.log('hi from onchange' , event.target.value)
      this.setState({
          inputValue:event.target.value
      })
    }
    pizza(){
      
        return  <PizzaList pizzas={this.sortPizzas(filteredPizzas)}
        handlePizzaView={this.handlePizzaView}
        pizzaFilterOnChange={this.pizzaFilterOnChange}
        inputValue={this.state.inputValue}/>;

      }}
  

   render(){
    constfilteredPizzas =
     this.state.pizzas.filter(pizza =>{
        return pizza.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
     })
     return(
        <div className='pizza-container'></div>
     )
 
     }


