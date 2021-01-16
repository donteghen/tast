var Review = require('../models/review');
var Restaurant = require('../models/restaurant');
var User = require('../models/user');
// get all Review list
exports.Review_list = async function(req, res){
    var id = req.params.id;
    var review = new Review({
        reviewer : req.reviewer,
        content : req.content,
        star_rating : req.star_rating,
        review_date : Date.now()
    });
    await review.save((err, newReview)=>{
        if(err){
            res.json({'error message' : "Couldn't save new review !"});
        }
        else{
             Restaurant.findOne({_id:id}, (err, restau)=>{
                if(err){
                    res.json({'error message' : "Couldn't find for reviewing restaurant!"});
                }
                else{
                    restau.reviews.push(newReview._id);
                    restau.save((err)=>{
                        if(err){
                            res.json({'error message' : "Couldn't  review restaurant!"});
                        }
                        else{
                            res.json({'success message' : "successfully reviewed restaurant!"});
                        }
                    })
                }
            })
        }
    })
    
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
exports.Review_Delete = async function(req, res){
    
}