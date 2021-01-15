var Review = require('../models/review');
var Restaurant = require('../models/restaurant');
var User = require('../models/user');
// get all Review list
exports.Review_list = function(req, res){
    res.send('sending all Review list');
}

 //Review details
exports.Review_Details = function(req, res){
    res.send('sending  Review'+req.params.id);
}

//  create new Review.
exports.Review_create = function(req, res) {
    res.send('Review created');
};

//  update Review
exports.Review_Update = function(req, res){
    res.send('Review updating.....' + req.params.id);
}


// delete Review
exports.Review_Delete = function(req, res){
    res.send(' deleting Review')
}