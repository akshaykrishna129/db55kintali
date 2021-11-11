const mongoose = require("mongoose") 
const landSchema = mongoose.Schema({ 
 land_type: String, 
 area: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("land", 
landSchema) 