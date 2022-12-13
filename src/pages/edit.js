import React, { Component } from "react";
import axios from 'axios';

export default class OrdersEdit extends Component {
    constructor(props) {
        super(props)
   
        // Setting up functions
        this.onChangePizzasName=this.onChangePizzasName.bind(this);
        this.onChangePizzasVarients=this.onChangePizzasVarients.bind(this);
        this.onChangePizzasBaseType=this.onChangePizzasBaseType.bind(this);
        this.onChangePizzasChesseTypes=this.onChangePizzasChesseTypes.bind(this);
        this.onChangePizzasToppings=this.onChangePizzasToppings.bind(this);
   
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          
          name: '',
          varients:'' ,
          baseType:'' ,
          chessetypes: '',
          toppings:'',
        }
      }
     
      componentDidMount() {
        axios.get('http://localhost:4000/pizzas/edit-pizzas/' + this.props.match.params.id)
          .then(res => {
            this.setState({
                name:res.data.name,
                varients:res.data.varients,
                baseType:res.data.baseType,
                chessetypes:res.data.chessetypes,
                toppings:res.data.toppings,
               
            }); console.log(res)
          })
          .catch((error) => {
            console.log(error);
          })
      }
      onChangePizzasName(e) {
        this.setState({ name: e.target.value })
      }
    
      onChangePizzasVarients(e) {
        this.setState({ varients: e.target.value })
      }
    
      onChangePizzasBaseType(e) {
       this.setState({ baseType: e.target.value })
     }
   
     onChangePizzasChesseTypes(e) {
       this.setState({ chessetypes: e.target.value })
     }
   
     onChangePizzasToppings(e) {
       this.setState({ toppings: e.target.value })
     }

    
      onSubmit = (event) =>{
          event.preventDefault();
   
         const pizzasObject = {
         name:this.state.name,
         varients:this.state.varients,
         baseType:this.state.baseType,
         chessestypes:this.state.chessetypes,
         toppings:this.state.toppings
        };
        axios.put('http://localhost:4000/pizzas/update-pizzas/',+ this.props.match.params.id, pizzasObject)
        .then((res) => {
            console.log(res.data)
            console.log('Orders successfully updated')
          }).catch((error) => {
            console.log(error)
          })
    
        this.props.history.push('/orders-list')
      }
    
      render(){
      return(
    
        <div className ="div3">
        <form onSubmit={this.onSubmit} className="form3">
               
              <label>Pizza Name</label>
              <input type="text"  placeholder='enter your pizza name' onChange={this.onChangePizzasName} value={this.state.name} name="Oname"></input><br></br>
              <br></br>
   
               <label>Varients</label>
               <select name="varients"  onChange={this.onChangePizzasVarients}>
               <option>Select</option>
               <option value={this.state.small}>small</option>
               <option value={this.state.medium}>medium</option>
               <option value={this.state.large}>large</option>
               </select><br></br><br></br>
             
               <label>Base Types</label>
               <select name="baseType"  onChange={this.onChangePizzasBaseType}>
               <option>Select</option>
               <option value={this.state.Thin}>Thin</option>
               <option value={this.state.Curste}>Curst</option>
               </select><br></br><br></br>
   
   
               <label>ChessesTypes</label>
               <select name="chessetypes"  onChange={this.onChangePizzasChesseTypes}>
               <option>Select</option>
               <option value={this.state.mozerella}>mozerella</option>
               <option value={this.state.parmesan}>parmesan</option>
               <option value={this.state.goatcheese}>goatcheese</option>
               <option value={this.state.cheddar}>cheddar</option>
               </select><br></br><br></br>
   
         
   
               <label>Toppings</label>
               <select name="toppings"  onChange={this.onChangePizzasBaseType}>
               <option>Select</option>
               <option value={this.state.pepperoni}>pepperoni</option>
               <option value={this.state.mushroom}>mushroom</option>
               <option value={this.state.extrachesse}>extrachesse</option>
               </select><br></br><br></br><br></br>
   
              
            <button type="submit" className="btn1" >Save</button>
            
          </form>
        </div>
      
   )}
   
   }





