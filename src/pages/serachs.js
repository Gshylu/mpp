import React , {Component} from "react"


export default class Serach extends Component{
  render(){
  return(
    
    <input type="search"
    className="search"
    placeholder={this.props.placeholder}
    onChange={this.props.handleChange}/>
   
  )
}}