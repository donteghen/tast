var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RestaurantSchema = new Schema(
  {
    name: {type: String, required: true, maxlength: 100},
    location: {type: String, required: true, maxlength: 100},
    menu:{
        drinks:[String],
        dishes:[String]
    },
    reviews:[{type:Schema.ObjectId, ref:'Review'}]
  }
);

module.exports = mongoose.model('Restaurant', RestaurantSchema);