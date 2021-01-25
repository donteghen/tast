var express = require('express');
var router = express.Router();

var User_Controller = require('../controllers/userController');

/* GET users . */
router.get('/users', User_Controller.User_list);

/* Get User details */
router.get('/users/:id', User_Controller.User_Details);

/*Create new user */
router.post('/user', User_Controller.User_create);

/*Update User */
router.put('/users/:id/update', User_Controller.User_Update);

/*Delete User */
router.delete('/users/:id', User_Controller.User_Delete);

module.exports = router;
