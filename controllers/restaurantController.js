var Restaurant = require('../models/restaurant');
var Review = require('../models/review');

// get all restaurant list
exports.Restaurant_list = async function(req, res){
    await Restaurant.find().populate('reviews').exec((err, docs) =>{
        if(err){
            res.json({'error message' : "Couldn't get restatants"});
        }
        else{
            res.json(docs);
        }
    })
}

// Restaurant details
exports.Restaurant_Details = function(req, res){
    const id = req.params.id;
    Restaurant.find({_id:id}).populate('reviews').exec((err, doc) =>{
        if(err){
            res.json({'error message' : "Couldn't find requested restaurant"});
        }
        else{
            res.json(doc);
        }
    })
    
}

//// Restuarant create.
exports.Restaurant_create = function(req, res) {
    var restaurant = new Restaurant({
        name:req.body.name,
        location:req.body.location,
        menu:{
            drinks:req.body.drinks,
            dishes:req.body.dishes
        },
        reviews:[]
    });
    restaurant.save((err) =>{
        if(err){
            res.json({'error message' : "Couldn't create new restaurant"});
        }
        else{

            res.json({'success message': 'successfully created'})
        }
    })
};

// Restaurant update
exports.Restaurant_Update = async function(req, res){
    var id = req.params.id;
    await Restaurant.updateOne({_id:id}, (err)=>{
    if(err){
        res.json({'error message' : "Couldn't update restaurant"});
    }
    else{
        res.json({'success message': 'successfully updated'})
    }
    });
    
}

// Restaurant Delete 
exports.Restaurant_Delete = async function(req, res){
    var id = req.params.id;
    await Restaurant.deleteOne({_id:id}, (err)=>{
        if(err){
            res.json({'error message' : "Couldn't delete restaurant"});
        }
        else{
            Review.deleteMany({_id:id}, (err)=>{
                if(err){
                    res.json({'error message' : "Couldn't delete related restaurant's reviews "});
                }
                else{
                    res.json({'error message' : "delete completed"});
                }
            })
        }
    })
}

// creating a review
exports.Restaurant_Create_review = function(req, res){
    
}