const mongoose = require("mongoose") 
const landSchema = mongoose.Schema({ 
 land_type: {
     type:String,
     minLength:9
 },

 area: {
     type:String,
     minLength:6

 } , 
 cost: Number 
}) 
 
module.exports = mongoose.model("land", 
landSchema) 