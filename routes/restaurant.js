var express = require('express');
var router = express.Router();

var Restaurant_Controller = require('../controllers/restaurantController');
var Review_Controller = require('../controllers/reviewController');

/* GET home page. */
router.get('/', function(req, res){
    res.redirect('/restaurants')
});

/* GET restaurant page. */
router.get('/restaurants', Restaurant_Controller.Restaurant_list);

/* Get restaurant detail page */
router.get('/restaurants/:id', Restaurant_Controller.Restaurant_Details);

/* create new restaurant */
router.post('/restaurant', Restaurant_Controller.Restaurant_create) 

/*Update restaurant */
router.put('/restaurants/:id/update', Restaurant_Controller.Restaurant_Update);

/*Delete restaurant */
router.delete('/restaurants/:id', Restaurant_Controller.Restaurant_Delete);



//******************************************************************************************************************//

/* create new restaurant review *************************************************************************/
router.post('/restaurants/:id/reviews', Review_Controller.Review_create) 

/* get all restaurant reviews *************************************************************************/
router.get('/restaurants/:id/reviews', Review_Controller.Review_list) 
  
module.exports = router;
