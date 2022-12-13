import React,{Component} from "react"
import axios from "axios"
import {Link} from "react-router-dom"



export default class OrderTable extends Component {
    constructor(props) {
      super(props)
      this.deletePizza = this.deletePizza.bind(this)
    }
  
    deletePizza() {
      axios
        .delete(
          'http://localhost:4000/pizzas/delete-pizzas/' + this.props.obj._id,
        )
        .then((res) => {
          console.log(res.data)
          console.log('Order successfully deleted!' )
          alert('Order successfully deleted')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  
    render() {
      return (
        <tr className="tr1">
          <td className="td1">{this.props.obj._id}</td>
          <td className="td1">{this.props.obj.name}</td>
          <td className="td1">{this.props.obj.varients}</td>
          <td className="td1">{this.props.obj.baseType}</td>
          <td className="td1">{this.props.obj.toppings}</td>
          <td className="td1">{this.props.obj.chessetypes}</td>
          <td className="td1"> 
          <Link
            className="edit-link" path={"product/:id"}
            to={'/edit-orders/' + this.props.obj._id}
          >
            Edit
          </Link>
          </td>          
          <td className="td1">
          <button onClick={this.deletePizza}>
              Delete
          </button>
          </td>
        </tr>
      )
    }
  }