var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var land_controller = require('../controllers/land'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// land ROUTES /// 
 
// POST request for creating a land.  
router.post('/land', land_controller.land_create_post); 
 
// DELETE request to delete land. 
router.delete('/land/:id', land_controller.land_delete); 
 
// PUT request to update land. 
router.put('/land/:id', land_controller.land_update_put); 
 
// GET request for one land. 
router.get('/land/:id', land_controller.land_detail); 
 
// GET request for list of all land items. 
router.get('/land', land_controller.land_list); 
 
module.exports = router;