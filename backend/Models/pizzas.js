const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let pizzasSchema = new Schema({

name: {
    type: String
},
varients :{
  type: Array
},
prices: {
    type: Object
},
baseType: {
    type: Array
},
toppings :{
  type: Array
},
chessetypes:{
  type: Array
},
Image :{
    type: String
},
rating :{
    type:Number
}
},{
    collection: 'pizzas'
})

module.exports = mongoose.model('Pizza', pizzasSchema)
