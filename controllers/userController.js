var User = require('../models/user');

// get all User list
exports.User_list = async function(req, res){
    await User.find((err, docs)=>{
        if(err){
            res.json({'error message' : "Couldn't get users"});
        }
        else{
            res.json(docs);
        }
    })
}

// User details
exports.User_Details = async function(req, res){
    var id = req.params.id;
    await User.findById({_id:id}, (err, doc)=>{
        if(err){
            res.json({'error message' : "Couldn't get user details"});
        }
        else{
            res.json(doc);
        }
    })
}

//// Restuarant create.
exports.User_create = function(req, res) {
    var user = new User({
    userName: req.body.userName,
    email: req.body.email,
    isAdmin: req.body.isAdmin
    });
    user.save((err) =>{
        if(err){
            res.status(500).json({'error message' : "Couldn't create new user "});
        }
        else
        {
            res.status(200).json({'sucsess message' : "User created "});
        }
    })
};

// User update
exports.User_Update = async function(req, res){
    var id = req.params.id;
    await User.updateOne({_id:id}, {userName: req.body.userName, email: req.body.email, isAdmin: req.body.isAdmin}, (err, doc)=>{
        if(err){
            res.status(500).json({'error message' : "Couldn't update user "});
        }
        else
        {
            console.log(req.body.isAdmin);
            console.log(JSON.stringify(doc));

            res.status(200).json({'sucsess message' : "User successfully updated "});
        }
    })
}

// Restaurant Delete 
exports.User_Delete = async function(req, res){
    var id = req.params.id;
    await User.deleteOne({_id:id}, (err)=>{
        if(err){
            res.status(500).json({'error message' : "Couldn't delete user "});
        }
        else
        {
            res.status(200).json({'sucsess message' : "User successfully deleted "});
        }
    })
}