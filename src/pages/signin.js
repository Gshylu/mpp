import React , { Component } from "react"
import axios from 'axios';
//import AsyncSelect from "react-async-select"
import "./style/style.css"
//import {Link} from "react-router-dom"


export default class Customize extends Component {
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
       name:'',
       varients:'',
       baseType: '',
       chessetypes:'',
       toppings:'',

       pizzas: [],
       isLoading: true
     }
   }
 
    getAllPizzas(){
        this.setState({
            isLocading: true
        },
        ()=>{
            fetch("http://localhost:4000/pizzas/")
            .then(res=>res.json())
            .then(result=>this.setState({
                isLoading:false,
                pizzas:result
            })).catch(console.log);
        });
    }
    componentDidMount(){this.getAllPizzas();}

   

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
       event.preventDefault(event);

      const pizzasObject = {
      name:this.state.name,
      varients:this.state.varients,
      baseType:this.state.baseType,
      chessetypes:this.state.chessetypes,
      toppings:this.state.toppings
     };
     axios.post('http://localhost:4000/pizzas/create-pizzas', pizzasObject)
       .then(res => console.log(res.data));
       alert("your details has been submitted")
     
     this.setState({name:" ",varients:"",baseType:" ",chessetypes:" ",topppings:" " , })
   }

   render(){
     const pizzas=this.state.pizzas;
        return(
          <div className ="div3">
              <form onSubmit={this.onSubmit} className="form3">                
              <select className="form-control" value={this.state.name} onChange={this.onChangePizzasName}>
              <option value="">choose pizza</option>
              {pizzas.map(pizza => (
              <option value={pizza.name} key={pizza.id} >{pizza.name}</option>
              ))
              }
          </select><br></br><br></br>
               
    
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
            <option value={this.state.Thin} selected>Thin</option>
            <option value={this.state.Curste} selected>Curst</option>
            </select><br></br><br></br>

            <label>Toppings</label>
            <select name="toppings"  onChange={this.onChangePizzasToppings}>
            <option>Select</option>
            <option value={this.state.pepperoni}>pepperoni</option>
            <option value={this.state.mushroom}>mushroom</option>
            <option value={this.state.extrachesse}>extrachesse</option>
            </select><br></br><br></br><br></br>

            <label>ChesseTypes</label>
            <select name="chessetypes"  onChange={this.onChangePizzasChesseTypes}>
            <option>Select</option>
            <option value={this.state.mozerella}>mozerella</option>
            <option value={this.state.parmesan}>parmesan</option>
            <option value={this.state.goatcheese}>goatcheese</option>
            <option value={this.state.cheddar}>cheddar</option>
            </select><br></br><br></br>
         
           
            <button type="submit" className="btn1" >Order</button>
       </form>
     </div>
   
)}

}
