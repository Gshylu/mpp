import React, {Component}from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
//import './pages/style/style.css'

import Home from "./Home"
import Customize from "./signin"
import OrderList from "./Orderslist" 
import OrdersEdit  from "./edit"
import About from "./about"


export default class App extends Component {
  render(){
      return(
   
<Router>

        <header className="App-header">
         <ul>
           <li style={{ float:"right" , color:"white",paddingTop:"10px" ,paddingRight:"100px" , fontSize:30,}}> <i style={{color:"blue"}}>JK</i> PizzaHut</li>
          <Link to={'/'} className="nav-link"><li><a href="#home">Home</a></li></Link>
          <Link to={'/create-pizzas'} className="nav-link"><li><a href="#orders">Customize Order</a></li></Link>
          <Link to={'/orders-list'} className="nav-link"><li><a href="#orderslist">YourOrders</a></li></Link>
          <Link to={'/aboutus'} className="nav-link"><li><a href="#aboutus">AboutUs</a></li></Link>
         
         </ul>
        </header>
  <div className="App">
  
<Routes>

<Route exact path='/' element={<Home/>}></Route>
<Route exact path="/create-pizzas" element={<Customize/>}></Route>
<Route exact path="/orders-list" element={<OrderList/>}></Route>
<Route exact path="/edit-orders/:id" element={<OrdersEdit/>}></Route>
<Route exact path="/aboutus" element={<About />}></Route>

</Routes>
           
           </div>
         </Router>
       
         );
       }}