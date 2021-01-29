var Review = require('../models/review');
var Restaurant = require('../models/restaurant');
var User = require('../models/user');
const { deleteOne } = require('../models/review');

// get all Review list
exports.Review_list = async function(req, res) {
    
    await Review.find().populate('reviewer').exec((err, docs) => {
        if(err){
            res.status(500).json({"Error Message": "Couldn't find restaurant List"});
        }
        else{
            res.status(200).json(docs);
        }
    })
};

 //Review details
 exports.Review_Details = function(req, res){
    res.send('sending  Review'+req.params.id);
}

//  create new Review.
exports.Review_create = async function(req, res){   
    var id = req.params.id;
    var review = new Review({
        reviewer : req.body.reviewer,
        content : req.body.content,
        star_rating : req.body.star_rating,
        review_date : Date.now()
    });
    await review.save((err, newReview)=>{
        if(err){
            res.json({'error message' : "Couldn't save new review !"});
        }
        else{
             Restaurant.findOne({_id:id}, (err, restaurant)=>{
                if(err){
                    res.json({'error message' : "Couldn't find restaurant for reviewing !"});
                }
                else{
                    restaurant.reviews.push(newReview._id);
                    restaurant.save((err)=>{
                        if(err){
                            res.json({'error message' : "Couldn't  add review to restaurant!"});
                        }
                        else{
                            res.json({'success message' : "successfully reviewed restaurant!"});
                        }
                    })
                }
            });

        }
    })
    
}


//  update Review
exports.Review_Update = function(req, res){
    res.send('Review updating.....' + req.params.id);
}


// delete Review
exports.Review_Delete = async function(req, res){
    var id = req.params.id;
    var reviewId = req.params.review_id;
    console.log(id, reviewId);
    await Review.deleteOne({_id:reviewId}, (err) =>{
        if(err){
            res.status(500).json({"Error message": "Couldn't delete review"});
        }
        else{
            Restaurant.findOne({_id:id}, (err, doc) =>{
                if(err){
                    res.status(500).json({"Error message": "Couldn't find restaurant to delete review"});
                }
                else{
                    console.log(doc)
                    doc.reviews.pull(reviewId);
                    doc.save((err) =>{
                        if(err){
                            res.status(500).json({"error message": "Couldn't delete review reference in restaurant"})
                        }
                        else{
                            console.log(doc)
                            res.status(200).json({"Success message":"Successfully deleted review and restaurant reference"})
                        }
                    })
                }
            })
        }
    })
}
