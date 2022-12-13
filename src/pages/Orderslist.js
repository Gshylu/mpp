import React,{Component} from "react"
import axios from "axios"
import {Table} from "react-bootstrap"
import OrderTable from "./OrderTable"

export default class OrderList extends Component {

    constructor(props) {
      super(props)
      this.state = {
        pizzas: []
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:4000/pizzas/')
        .then(res => {
          this.setState({
            pizzas: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    DataTable() {
      return this.state.pizzas.map((res, i) => {
        return <OrderTable obj={res} key={i} />;
      });
    }
  
  
    render() {
      return (<div className="table-wrapper">
        <Table striped bordered hover className="table1">
         <thead>
            <tr className="tr1">
              <th className="th1">UserId</th>
              <th className="th1">Name</th>
              <th className="th1">Varients</th>
              <th className="th1">BaseTypes</th>
              <th className="th1">Toppings</th>
              <th className="th1">ChesseTypes</th>
              <th className="th1">Edit</th>
              <th className="th1">Delete</th>
           </tr>
           </thead>
           <tbody>  
           {this.DataTable()}
           </tbody> 
          
        </Table>
      </div>);
    }
  }