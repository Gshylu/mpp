import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import "./style/style.css"

export default class CardsDetails extends Component {
render(){
  return (
<tr className="tr2">
<td className="td2">
    <Card style={{width:'18rem'}} className="tb2">
      <Card.Img variant="top" className="img1" src={this.props.obj.image}  height={200} width={290} />
      <Card.Body className="cardbody">
        <Card.Title style={{color:'orange'}}><h3>{this.props.obj.name}</h3></Card.Title>
        <Card.Text>
    
<b>Rs/-</b>{this.props.obj.prices.small} for small<br/>
<b>Rs/-</b>{this.props.obj.prices.medium} for medium<br/>
<b>Rs/-</b>{this.props.obj.prices.large} for large<br/>

        </Card.Text>
        <Button className="ordernow">Order Now</Button>
      
        
      </Card.Body>
    </Card>
    </td>
    </tr>
  );
}}


 

     
/*
  <NavDropdown title="Varients" id="navbarScrollingDropdown"> 
              <NavDropdown.Item href="#action4">
              {this.props.obj.varients[0]}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              {this.props.obj.varients[1]}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              {this.props.obj.varients[2]} 
              </NavDropdown.Item>
           </NavDropdown>


           <NavDropdown title="Toppings" id="navbarScrollingDropdown"> 
              <NavDropdown.Item href="#action4">
              {this.props.obj.toppings[0]}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              {this.props.obj.toppings[1]}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              {this.props.obj.toppings[2]}
              </NavDropdown.Item>
           </NavDropdown>
          
           <NavDropdown title="CheeseTypes" id="navbarScrollingDropdown"> 
              <NavDropdown.Item href="#action4">
              {this.props.obj.chessetypes[0]}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              {this.props.obj.chessetypes[1]} 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              {this.props.obj.chessetypes[2]}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              {this.props.obj.chessetypes[3]}
              </NavDropdown.Item>
           </NavDropdown>


           <NavDropdown title="BaseType" id="navbarScrollingDropdown"> 
              <NavDropdown.Item href="#action4">
              {this.props.obj.baseType[0]}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              {this.props.obj.baseType[1]}
              </NavDropdown.Item>
              </NavDropdown>*/