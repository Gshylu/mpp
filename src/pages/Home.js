import React, { Component } from "react";
import axios from 'axios';
import CardssDetails from "./card";
import  Serach from "./serachs";

import "./style/style.css"


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pizzas: [],
      searchField:'',
      stats:[],
    };
  }
componentDidMount() {
    axios.get('http://localhost:4000/pizzas/')
      .then(res => {
        console.log(res)
        this.setState({
          pizzas: res.data
        }); console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
    }
  
  handleChange = (e) =>{
    console.log(e.target.value)
      this.setState({searchField:e.target.value})
  }
 
 card() { return this.state.pizzas.map((res, i) => {
    return <CardssDetails obj={res} key={i}  />;
  });

  }
  render () {
    /*const {stats,searchField} = this.state
    const filteredData = stats.filter(country =>(
      country.Country.toLowerCase().includes(searchField.toLowerCase())
      )) */
    return (
     
      <div>
      
       <Serach placeholder="enter your search" handleChange={this.handleChange}/>
   
   <table className="table2">   
   {this.card()}
  </table>
</div>
  
    )
  }
}


/*
 const filterData = name.filter((e) => {
  let nameToLc = e.name.toLowerCase()
  let convertToLc = searchField.toLowerCase()
  return nameToLc.includes(convertToLc)
 

})
console.log( filterData)

*/





