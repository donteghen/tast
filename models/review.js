var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReviewSchema = new Schema(
  {
    reviewer: {type:Schema.ObjectId, ref:'User'},
    content: {type: String, required: true, maxlength: 500},
    star_rating:{type:Number, required:true},
    review_date:{type:Date, default:Date.now()}
  }
);

module.exports = mongoose.model('Review', ReviewSchema);