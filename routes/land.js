var express = require("express");
const land_controlers= require('../controllers/land'); 
var router = express.Router();

/* GET land */ 
router.get('/', land_controlers.land_view_all_Page ); 
module.exports = router; 

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("land", { title: "Search Results Land" });
});
/* GET detail land page */ 
router.get('/detail', land_controlers.land_view_one_Page); 
/* GET create costume page */ 
router.get('/create', land_controlers.land_create_Page); 
/* GET create update page */ 
router.get('/update', land_controlers.land_update_Page); 
/* GET create land page */ 
router.get('/delete', land_controlers.land_delete_Page); 

module.exports = router;