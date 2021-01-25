var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    userName: {type: String, required: true, maxlength: 100},
    email: {type: String, required: true, maxlength: 100},
    isAdmin:{type:String, default:false}
  }
);

module.exports = mongoose.model('User', UserSchema);